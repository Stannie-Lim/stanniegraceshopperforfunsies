import React from "react";
import { Grid, Card, Typography } from "@mui/material";

import { useSelector } from "react-redux";

import { Products } from "./Products";

export const Homepage = () => {
  const { products } = useSelector((state) => state);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Products />
    </Grid>
  );
};
