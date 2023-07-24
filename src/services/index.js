import axios from "axios";

export const getPlants = () => {
  return axios.get('http://localhost:3001/plants');
};