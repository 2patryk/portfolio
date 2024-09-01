import { FC } from "react";
import * as Styled from "./Asset.styles";

export type AssetProps = {
  src: string;
  type: "video" | "image";
  alt: string;
};

const Asset: FC<AssetProps> = ({ src, alt, type }) => {
  return (
    <Styled.Wrapper>
      {type === "image" ? (
        <Styled.Image src={src} alt={alt} fill unoptimized />
      ) : (
        <Styled.Video src={src} autoPlay muted playsInline loop />
      )}
    </Styled.Wrapper>
  );
};

export default Asset;
