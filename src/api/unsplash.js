import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID w8-DzFlgCGBCEXe-rRMjnTbuxSLYqRx3x0JyPtkm_rE"
  }
});
