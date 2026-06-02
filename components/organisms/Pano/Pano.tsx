"use client";

import { FC, useRef, useState } from "react";
import * as Styled from "./Pano.styles";
import { PANO_DATA, PanoType, getPanoText } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  AutorotatePlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";

const R = 20;
const CIRCUMFERENCE = 2 * Math.PI * R;

type PanoProps = {
  pano: PanoType;
};

const Pano: FC<PanoProps> = ({ pano }) => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(true);
  const viewerRef = useRef<any>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const { place, region, country } = getPanoText(pano);
  const visiblePanos = PANO_DATA.filter((p) => !p.hidden);
  const currentIndex = visiblePanos.findIndex((p) => p.slug === pano.slug);
  const nextPano = visiblePanos[(currentIndex + 1) % visiblePanos.length];
  const { place: nextPlace } = getPanoText(nextPano);

  const plugins = [
    [
      AutorotatePlugin,
      {
        autorotatePitch: "-11deg",
        autostartDelay: 0,
        autostartOnIdle: false,
        autorotateSpeed: "1rpm",
      },
    ],
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
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.Wrapper>
  );
};

export default Pano;
