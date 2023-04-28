import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import {
  Grid,
  Card,
  Typography,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const max = useMemo(() => {
    return item.quantity + 10;
  }, [item.quantity]);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Grid item container>
      <Grid item xs={4}>
        <Card variant="outlined" style={{ padding: 8 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>{item.product.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <img
                src={item.product.imageURL}
                style={{ height: 100, width: 100 }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Quantity</InputLabel>
                <Select
                  value={quantity}
                  label="Quantity"
                  onChange={handleChange}
                >
                  {Array(max)
                    .fill()
                    .map((_, index) => (
                      <MenuItem value={index + 1} key={index}>
                        {index + 1}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

const Total = () => {
  const { cart } = useSelector((state) => state);

  const total = useMemo(() => {
    return (
      cart.lineItems?.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      ) || 0
    );
  }, [cart.lineItems]);

  return (
    <Grid container item>
      <Card variant="outlined" style={{ padding: 8 }}>
        <Typography>Total: {total}</Typography>
      </Card>
    </Grid>
  );
};

export const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid container item xs={6} spacing={2}>
        {cart.lineItems?.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Grid>
      <Grid container item xs={6}>
        <Total />
      </Grid>
    </Grid>
  );
};
