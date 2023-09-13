"use client";

import { FC, useMemo } from "react";
import * as Styled from "./Pano.styles";
import dynamic from "next/dynamic";
import { PANO_DATA } from "@/utils/data";

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

const Pano: FC = () => {
  const item = useMemo(
    () => PANO_DATA[Math.floor(Math.random() * PANO_DATA.length)],
    []
  );

  return (
    <Styled.Wrapper>
      {item.src && (
        <ReactPhotoSphereViewer
          src={item.src}
          height={"100vh"}
          width={"100%"}
          container={""}
          navbar={false}
          loadingImg={undefined}
          loadingTxt={undefined}
        ></ReactPhotoSphereViewer>
      )}
    </Styled.Wrapper>
  );
};

export default Pano;
