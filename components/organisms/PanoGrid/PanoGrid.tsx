"use client";

import { PANO_DATA, PanoType } from "@/utils/data";
import { preloadPano, markPreloaded } from "@/utils/panoCache";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import * as Styled from "./PanoGrid.styles";

const PanoGrid = () => {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
  const [fadingOut, setFadingOut] = useState(false);

  const handleMouseEnter = (pano: PanoType) => {
    preloadPano(pano.src);
  };

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>, pano: PanoType) => {
    e.preventDefault();
    setLoadingSlug(pano.slug);
    await preloadPano(pano.src);
    markPreloaded(pano.slug);
    setFadingOut(true);
    await new Promise((r) => setTimeout(r, 380));
    router.push(`/pano/${pano.slug}`);
  };

  return (
    <motion.div
      animate={{ opacity: fadingOut ? 0 : 1 }}
      transition={{ duration: 0.38, ease: "easeInOut" }}
    >
      <Styled.Wrapper>
        <Styled.Inner>
          <Styled.Grid>
            {PANO_DATA.filter((p) => !p.hidden).map((pano) => (
              <Styled.Card
                key={pano.slug}
                href={`/pano/${pano.slug}` as Parameters<typeof Styled.Card>[0]["href"]}
                $loading={loadingSlug === pano.slug}
                onMouseEnter={() => handleMouseEnter(pano)}
                onClick={(e) => handleClick(e, pano)}
              >
                <Styled.PlanetWrapper>
                  <Image
                    src={pano.planet}
                    alt={pano.place}
                    width={600}
                    height={600}
                    quality={85}
                  />
                </Styled.PlanetWrapper>
                <Styled.Info>
                  <Styled.Place>{pano.place}</Styled.Place>
                  <Styled.Meta>
                    {pano.region}, {pano.country}
                  </Styled.Meta>
                </Styled.Info>
              </Styled.Card>
            ))}
          </Styled.Grid>
        </Styled.Inner>
      </Styled.Wrapper>
    </motion.div>
  );
};

export default PanoGrid;
