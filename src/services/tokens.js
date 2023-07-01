import axios from "axios";
import tokens from "../data/tokens";

const baseUrl = "/api/v3"

const getDate = () => {
  const date = new Date();
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  console.log(month)
  return `${day}-${month + 1}-${year}`;
}

const tokenPromiseArr = tokens.map((token) => {
  const url = `${baseUrl}/coins/${token}/history`
  const date = getDate()

  const tokenPromise = axios.get(url, {
    params: {
      date,
    }
  });

  return tokenPromise
})

export const getTokenHistoryArr = async () => {
  return await Promise.all(tokenPromiseArr)
}