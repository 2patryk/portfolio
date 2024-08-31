import { FC } from "react";
import * as Styled from "./Asset.styles";

export type AssetProps = {
  src: string;
  type: "video" | "image";
  alt: string;
};

const Asset: FC<AssetProps> = ({ src, alt, type }) => {
  return type === "image" ? (
    <Styled.ImageWrapper>
      <Styled.Image src={src} alt={alt} fill unoptimized />
    </Styled.ImageWrapper>
  ) : (
    <Styled.Video src={src} autoPlay muted playsInline loop />
  );
};

export default Asset;
