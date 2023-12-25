import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
const hotels = ref([]);

export const appStore = defineStore("app", () => {
  const destination = ref([]);
  const key = "baece3a843msh77fc752b2c16452p18f799jsnec448437d54b";
  async function getDestinations() {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
      params: { query: "egypt" },
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      console.log(options);
      let response = await axios.request(options);
      return response;
    } catch {
      return null;
    }
  }

  async function searchHotels(searchInputs) {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: searchInputs,
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      // options.params = Object.assign(options.params, searchInputs);
      // console.log(options.params);
      let response = await axios.request(options);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async function sortBy() {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
      params: {
        dest_id: "-2092174",
        search_type: "CITY",
        arrival_date: "<REQUIRED>",
        departure_date: "<REQUIRED>",
        adults: "1",
        children_age: "1,17",
        room_qty: "1",
      },
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      // options.params = Object.assign(options.params, searchInputs);
      // console.log(options.params);
      let response = await axios.request(options);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  return {
    getDestinations,
    searchHotels,
    sortBy,
  };
});
