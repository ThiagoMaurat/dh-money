"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header, Variants } from "../Header";
import { Footer } from "../Footer";

type TemplateProps = {
  children: ReactNode;
  buttonOn?: boolean;
  shouldShowUser?: boolean;
  variant?: Variants;
} & BoxProps;

export const Template = (props: TemplateProps) => {
  const {
    children,
    variant = "primary",
    buttonOn,
    shouldShowUser,
    ...rest
  } = props;

  return (
    <Box h="calc(100vh - 128px)" {...rest}>
      <Header
        variant={variant}
        shouldShowUser={shouldShowUser}
        buttonOn={buttonOn}
      />
      {children}
      <Footer />
    </Box>
  );
};
