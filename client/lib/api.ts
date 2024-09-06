import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCandlestickData = async () => {
  const res = await axios.get(`${BASE_URL}/api/candlestick-data`);
  return res.data;
};

export const fetchLineChartData = async () => {
  const res = await axios.get(`${BASE_URL}/api/line-chart-data`);
  return res.data;
};

export const fetchBarChartData = async () => {
  const res = await axios.get(`${BASE_URL}/api/bar-chart-data`);
  return res.data;
};

export const fetchPieChartData = async () => {
  const res = await axios.get(`${BASE_URL}/api/pie-chart-data`);
  return res.data;
};
