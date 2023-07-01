import axios from "axios";
import currencies from "../data/currencies";

const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1"

const getDate = (type) => {
  let date = new Date()
  if (type === 'yesterday') {
    date.setDate(date.getDate() - 1)
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
}

export const getCurrencyRates = async () => {
  const dateYesterday = getDate('yesterday')

  const [dataYesterday, dataToday] = await Promise.all([
    axios.get(`${baseUrl}/${dateYesterday}/currencies/usd.json`),
    axios.get(`${baseUrl}/latest/currencies/usd.json`),
  ])

  const ratesData = currencies.map(currency => {
    const rateYesterday = dataYesterday.data.usd[currency]
    const rateToday = dataToday.data.usd[currency]
    const diff = ((rateToday - rateYesterday) / rateYesterday).toFixed(3)

    return {
      currency: currency.toUpperCase(),
      rate: rateToday,
      diff,
    }
  })

  return ratesData
}