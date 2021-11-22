const axios = require("axios");

const baseURL = "https://api.fungenerators.com";
const apiKey = "ioJIzj9Ks4qPcQVMYWP1oQeF";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "X-Fungenerators-Api-Secret": apiKey,
  },
});

async function getPhoneNumbers({ size }) {
  return axiosInstance
    .get("/identity/person/phonenumber", {
      params: { limit: size },
    })
    .then((result) => result.data)
    .catch((err) => console.log(err));
}

module.exports = {
  getPhoneNumbers,
};
