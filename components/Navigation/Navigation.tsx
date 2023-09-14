import { PANO_DATA } from "@/utils/data";
import { FC } from "react";

import * as Styled from "./Navigation.styles";

type NavigationProps = {};

const Navigation: FC<NavigationProps> = () => {
  return (
    <Styled.Wrapper>
      <ul>
        {PANO_DATA.map((pano) => (
          <li key={pano.slug}>
            <Styled.NavLink href={`/pano/${pano.slug}`}>
              {pano.place}
            </Styled.NavLink>
          </li>
        ))}
      </ul>
    </Styled.Wrapper>
  );
};

export default Navigation;
