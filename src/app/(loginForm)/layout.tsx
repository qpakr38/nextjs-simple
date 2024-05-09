import type { Metadata } from "next";
import { Box, Card, Stack, Typography } from "@mui/material";

import styles from "./layout.module.css";
import { ReactNode } from "react";
import Image from "next/image";
import NextLogo from "@/public/next.svg";
import PageTitle from "@/components/layout/ui/PageTitle";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "hello",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Stack className={styles.main}>
      <Image src={NextLogo} alt={"hello"} className={styles.logo} />
      <PageTitle />
      <Box>{children}</Box>
    </Stack>
  );
}
