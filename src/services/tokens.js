import axios from "axios";
import tokens from "../data/tokens";

const baseUrl = "/api/v3"

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
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

export const getTokenPriceRangeHistory = async () => {
  const url = `${baseUrl}/coins/bitcoin/market_chart/range`
  const dateStart = new Date(new Date().getFullYear(), 0, 1)
  const dateEnd = new Date()
  const dateStartUnix = dateStart.getTime() / 1000
  const dateEndUnix = dateEnd.getTime() / 1000

  const { data } = await axios.get(url, {
    params: {
      vs_currency: "usd",
      from: dateStartUnix,
      to: dateEndUnix,
      precision: 2,
    }
  })

  return data.prices
}