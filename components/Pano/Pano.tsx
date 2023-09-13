"use client";

import { FC, Ref, useMemo, useRef } from "react";
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

const Pano: FC = () => {
  const panoRef = useRef<any>(null);
  const item = useMemo(
    () => PANO_DATA[Math.floor(Math.random() * PANO_DATA.length)],
    []
  );
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
          ref={panoRef}
          src={item.src}
          height={"100vh"}
          width={"100%"}
          container={""}
          navbar={false}
          loadingImg={undefined}
          loadingTxt={undefined}
          plugins={plugins as any}
          defaultZoomLvl={20}
          defaultPitch="-11deg"
        ></ReactPhotoSphereViewer>
      )}
    </Styled.Wrapper>
  );
};

export default Pano;
