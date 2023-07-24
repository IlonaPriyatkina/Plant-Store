// // Компонент Search
// import { TextField, createTheme, ThemeProvider } from "@material-ui/core";
// import shopGalleryStyles from './shop_gallery_style.module.scss';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2e7d32',
//     }
//   },
// });

// const Search = (props) => {
//   const { onChange } = props;

//   return (
//     <div className={shopGalleryStyles.textFiled_container}>
//       <ThemeProvider theme={theme}>
//         <TextField
//           label='search'
//           variant="standard"
//           fullWidth
//           type='search'
//           onChange={onChange}
//           sx={{
//             mb: "1.5rem",
//           }}
//         />
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Search; 