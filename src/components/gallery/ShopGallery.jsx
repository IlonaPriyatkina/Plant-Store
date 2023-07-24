import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shopGalleryStyles from './shop_gallery_style.module.scss';
import { Grid } from "@mui/material";
import GoodsItem from './GoodsItem';
import { getPlants } from '../../services';
import { TextField, createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    }
  },
});

const Gallery = (props) => {
  const [goods, setGoods] = useState([]);
  const { addToOrder } = props;
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getPlants()
      .then(res => res.data.map(plant => ({
        ...plant,
        price: Math.floor(Math.random() * 50) + 1,
        plantDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      })))
      .then(res => {
        setGoods(res.slice(0, 6));
        setFilteredList(res.slice(0, 6));
      })
      .catch(console.error);
  }, []);

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const sortedGoods = [...goods].sort((a, b) => a.Categories.localeCompare(b.Categories)); // Сортуємо список goods за полем "Categories"
    const updatedList = sortedGoods.filter((item) => {
      if (item.Categories && typeof item.Categories === 'string') {
        return item.Categories.toLowerCase().includes(query);
      }
      return false;
    });
    setFilteredList(query === '' ? sortedGoods : updatedList);
  };

  return (
    <div className={shopGalleryStyles.shop_gallery_container}>
      <div className={shopGalleryStyles.textFiled_container}>
        <ThemeProvider theme={theme}>
          <TextField
            label='search'
            variant="standard"
            fullWidth
            type='search'
            onChange={filterBySearch}
            sx={{
              mb: "1.5rem",
            }}
          />
        </ThemeProvider>
      </div>
      <Grid container spacing={2}>
        {filteredList.map((item) => (
          <GoodsItem key={item.id} plant={item} addToOrder={addToOrder} />
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;