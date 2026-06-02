"use client";

import { PANO_DATA, PanoCountry, getPanoText, panoCopy } from "@/utils/data";
import Image from "next/image";
import Logo from "@/components/atoms/Logo/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import * as Styled from "./PanoGrid.styles";

const LANG = "en";

const PanoGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCountry = searchParams.get("country") as PanoCountry | null;

  const toggleCountry = (value: PanoCountry) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeCountry === value) {
      params.delete("country");
    } else {
      params.set("country", value);
    }
    const qs = params.toString();
    router.replace(qs ? `/pano?${qs}` : "/pano", { scroll: false });
  };

  const filtered = PANO_DATA
    .filter((p) => !p.hidden)
    .filter((p) => !activeCountry || p.country === activeCountry);

  const countries = Object.values(PanoCountry);

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

        <Styled.Filters>
          {countries.map((c) => (
            <Styled.FilterPill
              key={c}
              $active={activeCountry === c}
              onClick={() => toggleCountry(c)}
            >
              {panoCopy[LANG].countries[c]}
            </Styled.FilterPill>
          ))}
        </Styled.Filters>

        <Styled.Grid>
          {filtered.map((pano) => {
            const { place, region, country } = getPanoText(pano, LANG);
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
          {filtered.length === 0 && (
            <Styled.EmptyState>No panoramas found.</Styled.EmptyState>
          )}
        </Styled.Grid>
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

export default PanoGrid;
