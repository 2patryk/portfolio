"use client";

import { FC } from "react";

import * as Styled from "./NotFoundPage.styles";
import { globalCopy } from "@/utils/copy";
import Button from "@/components/atoms/Button/Button";
import { ROUTES } from "@/utils/routes";

export type NotFoundPageProps = {};

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const copy = globalCopy.errors.notFound;

  return (
    <Styled.Wrapper>
      <Styled.Title>{copy.title}</Styled.Title>
      <Button label={copy.cta} href={ROUTES.HOME} />
    </Styled.Wrapper>
  );
};

export default NotFoundPage;
