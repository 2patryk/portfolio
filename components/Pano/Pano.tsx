"use client";

import { FC } from "react";
import * as Styled from "./Pano.styles";
import dynamic from "next/dynamic";

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
  return (
    <Styled.Wrapper>
      <ReactPhotoSphereViewer
        src="/images/balos.jpg"
        height={"100vh"}
        width={"100%"}
        container={""}
        navbar={false}
        loadingImg={undefined}
        loadingTxt={undefined}
      ></ReactPhotoSphereViewer>
    </Styled.Wrapper>
  );
};

export default Pano;
