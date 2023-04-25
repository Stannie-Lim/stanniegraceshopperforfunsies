import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../store";

export const Products = () => {
  const { products, auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  return products.map((product) => (
    <Grid key={product.id} xs={7} item>
      <Card variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={3} style={{ height: 150, width: 150 }}>
            <img src={product.imageURL} style={{ height: 150, width: 150 }} />
          </Grid>
          <Grid container item xs={9}>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.primary">
                {product.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </Grid>
            {auth && (
              <Grid
                item
                xs={12}
                alignItems="end"
                justifyContent="end"
                container
              >
                <IconButton onClick={() => addProductToCart(product)}>
                  <AddShoppingCartIcon style={{ color: "black" }} />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));
};
