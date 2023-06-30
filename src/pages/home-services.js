

// const axios = require("axios");

// export const getAccessTokenGithub = async (code) => {
//   const { data } = await axios.get(`http://localhost:3001/api/github/accessToken?code=${code}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return data;
// };

// export const getUserDataGithub = async (accessToken) => {
//   const { data } = await axios.get(`http://localhost:3001/api/github/userData?accessToken=${accessToken}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return data;
// };

// export const getUserDataGoogle = async (accessToken) => {
//   const { data } = await axios.get(`http://localhost:3001/api/google/userData?accessToken=${accessToken}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return data;
// };
// home-services.js
import axios from "axios";

const backendURL = "http://localhost:3000"; // Update with your backend server URL

export const getAccessTokenGithub = async (code) => {
  const { data } = await axios.get(`${backendURL}/api/github/accessToken?code=${code}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const getUserDataGithub = async (accessToken) => {
  const { data } = await axios.get(`${backendURL}/api/github/userData?accessToken=${accessToken}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const getUserDataGoogle = async (accessToken) => {
  const { data } = await axios.get(`${backendURL}/api/google/userData?accessToken=${accessToken}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};
