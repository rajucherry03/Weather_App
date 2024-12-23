const API_KEY = '78776857dd2a7ec3ae39e03d5666defa';  
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
};
