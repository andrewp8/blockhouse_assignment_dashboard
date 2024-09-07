import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    BarElement, 
    ArcElement, 
    Tooltip, 
    Title, 
    Legend 
  } from 'chart.js';
  
  import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
  import 'chartjs-chart-financial';  // Ensure the financial plugin is imported
  
  // Register chart components based on chart type
  export function chartRegistration_helper(chartType) {
    if (chartType === 'line') {
      ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title, Legend);
    } else if (chartType === 'bar') {
      ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title, Legend);
    } else if (chartType === 'pie') {
      ChartJS.register(ArcElement, Tooltip, Title, Legend);
    } else if (chartType === 'candlestick') {
      // Register CandlestickController and CandlestickElement for candlestick charts
      ChartJS.register(CategoryScale, LinearScale, CandlestickController, CandlestickElement, Tooltip, Title, Legend);
    } else {
      console.log('Unknown chart type');
    }
  }
  