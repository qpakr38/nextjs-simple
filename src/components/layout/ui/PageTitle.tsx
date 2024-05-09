"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const PageTitle = () => {
  const [title, setTitle] = useState(" ");

  useEffect(() => {
    setTitle(document?.title || "");
  }, []);

  return (
    <Box>
      <Typography variant={"h1"} align="center">
        {title}
      </Typography>
    </Box>
  );
};
export default PageTitle;
