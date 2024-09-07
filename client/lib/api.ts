import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCandlestickData = () => {
  return axios
    .get(`${BASE_URL}/api/candlestick-data/`)
    .then((res) => res.data)
    .catch((err) => {
      console.error('Error fetching candlestick data:', err);
      return { error: 'Error fetching candlestick data.' };
    });
};

export const fetchLineChartData = () => {
  return axios
    .get(`${BASE_URL}/api/line-chart-data/`)
    .then((res) => res.data)
    .catch((err) => {
      console.error('Error fetching line chart data:', err);
      return { error: 'Error fetching line chart data.' };
    });
};

export const fetchBarChartData = () => {
  return axios
    .get(`${BASE_URL}/api/bar-chart-data/`)
    .then((res) => res.data)
    .catch((err) => {
      console.error('Error fetching bar chart data:', err);
      return { error: 'Error fetching bar chart data.' };
    });
};

export const fetchPieChartData = () => {
  return axios
    .get(`${BASE_URL}/api/pie-chart-data/`)
    .then((res) => res.data)
    .catch((err) => {
      console.error('Error fetching pie chart data:', err);
      return { error: 'Error fetching pie chart data.' };
    });
};
