"use client";

import { FC, useRef, useState } from "react";
import * as Styled from "./Pano.styles";
import { PANO_DATA, PanoType, getPanoText } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  AutorotatePlugin,
  MarkersPlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";
import "@photo-sphere-viewer/markers-plugin/index.css";

const R = 20;
const CIRCUMFERENCE = 2 * Math.PI * R;
const IS_DEV = process.env.NODE_ENV === "development";

type DebugPos = { yaw: string; pitch: string };

type PanoProps = {
  pano: PanoType;
};

const Pano: FC<PanoProps> = ({ pano }) => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [debugPos, setDebugPos] = useState<DebugPos | null>(null);
  const [debugMarkers, setDebugMarkers] = useState<Record<string, DebugPos>>({});
  const isPlayingRef = useRef(true);
  const viewerRef = useRef<any>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const { place, region, country } = getPanoText(pano);
  const visiblePanos = PANO_DATA.filter((p) => !p.hidden);
  const currentIndex = visiblePanos.findIndex((p) => p.slug === pano.slug);
  const nextPano = visiblePanos[(currentIndex + 1) % visiblePanos.length];
  const { place: nextPlace } = getPanoText(nextPano);

  const toDeg = (rad: number) => `${(rad * 180 / Math.PI).toFixed(2)}deg`;

  const markerHtml = (tooltip?: string) =>
    `<div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
      ${tooltip ? `<span style="font-family:var(--figtree);font-size:11px;font-weight:500;color:#fff;white-space:nowrap;text-shadow:0 1px 6px rgba(0,0,0,0.7);margin-bottom:5px;">${tooltip}</span>` : ""}
      <div style="width:1px;height:22px;background:rgba(255,255,255,0.55);flex-shrink:0;"></div>
      <div style="position:relative;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <div class="pano-marker__ring" style="position:absolute;inset:0;border-radius:50%;border:1px solid rgba(255,255,255,0.4);"></div>
        <div style="width:6px;height:6px;border-radius:50%;background:#fff;position:relative;z-index:1;"></div>
      </div>
    </div>`;

  const markers = pano.markers?.map((m) => ({
    id: m.id,
    position: { yaw: m.yaw, pitch: m.pitch },
    html: markerHtml(m.tooltip),
    anchor: "bottom center",
    draggable: IS_DEV,
  })) ?? [];

  const plugins: any[] = [
    [
      AutorotatePlugin,
      {
        autorotatePitch: "-11deg",
        autostartDelay: 0,
        autostartOnIdle: false,
        autorotateSpeed: "1rpm",
      },
    ],
    ...(markers.length > 0 ? [[MarkersPlugin, { markers }]] : []),
  ];

  const toggleAutorotate = () => {
    const plugin = viewerRef.current?.getPlugin(AutorotatePlugin);
    clearTimeout(resumeTimeoutRef.current);
    if (isPlayingRef.current) {
      plugin?.stop();
      isPlayingRef.current = false;
    } else {
      plugin?.start();
      isPlayingRef.current = true;
    }
    setIsPlaying(isPlayingRef.current);
  };

  const handleReady = (instance: any) => {
    viewerRef.current = instance;

    const container: HTMLElement = instance.container;

    const onInteractionEnd = () => {
      clearTimeout(resumeTimeoutRef.current);
      if (!isPlayingRef.current) return;
      resumeTimeoutRef.current = setTimeout(() => {
        viewerRef.current?.getPlugin(AutorotatePlugin)?.start();
      }, 800);
    };

    container.addEventListener("pointerup", onInteractionEnd);
    container.addEventListener("touchend", onInteractionEnd);

    if (IS_DEV) {
      // Click anywhere → show coordinates
      instance.addEventListener("click", (e: any) => {
        setDebugPos({
          yaw: toDeg(e.data.yaw),
          pitch: toDeg(e.data.pitch),
        });
      });

      // Dragged marker → update coordinates
      const markersPlugin = instance.getPlugin(MarkersPlugin);
      if (markersPlugin) {
        markersPlugin.addEventListener("select-marker", (e: any) => {
          if (e.marker?.config?.position) {
            const pos = e.marker.config.position;
            setDebugMarkers((prev) => ({
              ...prev,
              [e.marker.config.id]: {
                yaw: typeof pos.yaw === "number" ? toDeg(pos.yaw) : pos.yaw,
                pitch: typeof pos.pitch === "number" ? toDeg(pos.pitch) : pos.pitch,
              },
            }));
          }
        });
      }
    }

    setIsReady(true);
  };

  return (
    <Styled.Wrapper>
      {pano.src && (
        <ReactPhotoSphereViewer
          key={pano.src}
          src={pano.src}
          height={"100vh"}
          width={"100%"}
          container={""}
          navbar={false}
          loadingImg={undefined}
          plugins={plugins as any}
          defaultZoomLvl={20}
          defaultPitch="-11deg"
          onReady={handleReady}
        />
      )}

      <AnimatePresence>
        {!isReady && (
          <Styled.LoadingOverlay
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <Styled.SpinnerTrack cx="24" cy="24" r={R} strokeWidth="1" fill="none" />
              <Styled.SpinnerArc
                cx="24" cy="24" r={R}
                strokeWidth="1"
                fill="none"
                strokeDasharray={`${CIRCUMFERENCE * 0.25} ${CIRCUMFERENCE * 0.75}`}
              />
            </svg>
          </Styled.LoadingOverlay>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Styled.BackButton href="/pano" aria-label="Back to grid">
              <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" fill="none">
                <polyline points="6,1 2,6 6,11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Styled.BackButton>

            <Styled.Overlay>
              <Styled.Details>
                <Styled.Label>360° Panorama</Styled.Label>
                <Styled.Title>{place}</Styled.Title>
                <Styled.Subtitle>{region} · {country}</Styled.Subtitle>
                <Styled.Controls>
                  <Styled.PlayPauseButton onClick={toggleAutorotate} aria-label={isPlaying ? "Pause rotation" : "Play rotation"}>
                    {isPlaying ? (
                      <svg viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="3" height="12" rx="1" />
                        <rect x="7" y="0" width="3" height="12" rx="1" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 L10 6 L0 12 Z" />
                      </svg>
                    )}
                  </Styled.PlayPauseButton>
                  <Styled.NextButton
                    onClick={() => router.push(`/pano/${nextPano.slug}`)}
                    aria-label="Next panorama"
                  >
                    <span>{nextPlace.length > 20 ? nextPlace.slice(0, 19) + "…" : nextPlace}</span>
                    <svg viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1 L7 6 L0 11 Z" />
                      <rect x="8.5" y="1" width="1.5" height="10" rx="0.75" />
                    </svg>
                  </Styled.NextButton>
                </Styled.Controls>
              </Styled.Details>
            </Styled.Overlay>

            {IS_DEV && (debugPos || Object.keys(debugMarkers).length > 0) && (
              <Styled.DebugPanel>
                {debugPos && (
                  <Styled.DebugEntry>
                    <Styled.DebugLabel>click</Styled.DebugLabel>
                    <Styled.DebugCode
                      onClick={() => navigator.clipboard.writeText(`yaw: "${debugPos.yaw}", pitch: "${debugPos.pitch}"`)}
                      title="click to copy"
                    >
                      yaw: "{debugPos.yaw}"<br />pitch: "{debugPos.pitch}"
                    </Styled.DebugCode>
                  </Styled.DebugEntry>
                )}
                {Object.entries(debugMarkers).map(([id, pos]) => (
                  <Styled.DebugEntry key={id}>
                    <Styled.DebugLabel>{id}</Styled.DebugLabel>
                    <Styled.DebugCode
                      onClick={() => navigator.clipboard.writeText(`yaw: "${pos.yaw}", pitch: "${pos.pitch}"`)}
                      title="click to copy"
                    >
                      yaw: "{pos.yaw}"<br />pitch: "{pos.pitch}"
                    </Styled.DebugCode>
                  </Styled.DebugEntry>
                ))}
              </Styled.DebugPanel>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.Wrapper>
  );
};

export default Pano;
