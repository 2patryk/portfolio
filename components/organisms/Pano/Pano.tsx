"use client";

import { FC, useState } from "react";
import * as Styled from "./Pano.styles";
import { PanoType } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import {
  AutorotatePlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";

type PanoProps = {
  pano: PanoType;
};

const Pano: FC<PanoProps> = ({ pano }) => {
  const [isReady, setIsReady] = useState(false);

  const plugins = [
    [
      AutorotatePlugin,
      {
        autorotatePitch: "-11deg",
        autostartDelay: 0,
        autorotateSpeed: "1rpm",
      },
    ],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.15 }}
    >
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
            onReady={() => setIsReady(true)}
          />
        )}

        {/* Text overlay — fades in when viewer is ready */}
        <AnimatePresence>
          {isReady && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Styled.Overlay>
                <Styled.Details>
                  <Styled.Label>360° Panorama</Styled.Label>
                  <Styled.Title>{pano.place}</Styled.Title>
                  <Styled.Subtitle>
                    {pano.region} · {pano.country}
                  </Styled.Subtitle>
                </Styled.Details>
              </Styled.Overlay>
            </motion.div>
          )}
        </AnimatePresence>
      </Styled.Wrapper>
    </motion.div>
  );
};

export default Pano;
