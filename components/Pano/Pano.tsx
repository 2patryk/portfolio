"use client";

import { FC, Ref, useMemo, useRef, useState } from "react";
import * as Styled from "./Pano.styles";
import dynamic from "next/dynamic";
import { PANO_DATA } from "@/utils/data";
// import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import {
  AutorotatePlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";

// const ReactPhotoSphereViewer = dynamic(
//   () =>
//     import("react-photo-sphere-viewer").then(
//       (mod) => mod.ReactPhotoSphereViewer
//     ),
//   {
//     ssr: false,
//   }
// );

const getRandomItem = (old?: any) => {
  const data = old
    ? PANO_DATA.filter((item) => item.src !== old.src)
    : PANO_DATA;

  return data[Math.floor(Math.random() * data.length)];
};

const Pano: FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [item, setItem] = useState(getRandomItem());

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
    <Styled.Wrapper>
      {item.src && (
        <ReactPhotoSphereViewer
          key={item.src}
          src={item.src}
          height={"100vh"}
          width={"100%"}
          container={""}
          navbar={false}
          loadingImg={undefined}
        //   loadingTxt={undefined}
          plugins={plugins as any}
          defaultZoomLvl={20}
          defaultPitch="-11deg"
          onReady={(instance) => setIsReady(true)}
        ></ReactPhotoSphereViewer>
      )}
      {isReady && (
        <Styled.Overlay>
          <Styled.Details>
            <Styled.Title>
              <span>{item.place}</span>
              <Styled.RefreshButton
                onClick={() => {
                  setIsReady(false);
                  setItem(getRandomItem(item));
                }}
              >
                <Styled.RefreshIcon src="/images/refresh.svg" />
              </Styled.RefreshButton>
            </Styled.Title>
            <Styled.Subtitle>
              {item.region}, {item.country}
            </Styled.Subtitle>
          </Styled.Details>
        </Styled.Overlay>
      )}
    </Styled.Wrapper>
  );
};

export default Pano;
