"use client";

import { PANO_DATA, getPanoText } from "@/utils/data";
import Image from "next/image";
import Logo from "@/components/atoms/Logo/Logo";
import * as Styled from "./PanoGrid.styles";

const PanoGrid = () => {
  return (
    <Styled.Wrapper>
      <Styled.Inner>
        <Styled.Header>
          <Styled.Title>Pano</Styled.Title>
          <Styled.ByLine href="/">
            by
            <Styled.LogoWrapper>
              <Logo hasFluidSize />
            </Styled.LogoWrapper>
          </Styled.ByLine>
        </Styled.Header>

        <Styled.Grid>
          {PANO_DATA.filter((p) => !p.hidden).map((pano) => {
            const { place, region, country } = getPanoText(pano);
            return (
              <Styled.Card
                key={pano.slug}
                href={`/pano/${pano.slug}` as Parameters<typeof Styled.Card>[0]["href"]}
              >
                <Styled.PlanetWrapper>
                  <Image
                    src={pano.planet}
                    alt={place}
                    width={600}
                    height={600}
                    quality={85}
                  />
                </Styled.PlanetWrapper>
                <Styled.Info>
                  <Styled.Place>{place}</Styled.Place>
                  <Styled.Meta>{region}, {country}</Styled.Meta>
                </Styled.Info>
              </Styled.Card>
            );
          })}
        </Styled.Grid>
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

export default PanoGrid;
