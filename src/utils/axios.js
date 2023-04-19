import axios from "axios";

const baseURL = "https://api.av100.ru/v3/";
const apiKey = "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9";

export const http = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "X-Api-Key": apiKey,
  },
});
