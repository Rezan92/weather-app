import weatherData from "../project-data/city-weather.json";
export const fetchData = async (url, setCityWeatherInfo, setIfError) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 401) {
      setCityWeatherInfo(weatherData[0]);
      const error = new Error();
      error.data = data;
      throw error;
    } else if (data.cod >= 400) {
      const error = new Error();
      error.data = data;
      throw error;
    } else {
      setIfError({});
      setCityWeatherInfo(data);
    }
  } catch (error) {
    setIfError(error.data);
  }
};

export const fetchDataForecast = async (url, setCityWeatherInfo) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod >= 400) {
      setCityWeatherInfo(weatherData[1]);
      const error = new Error();
      error.data = data;
      throw error;
    } else {
      setCityWeatherInfo(data);
    }
  } catch (error) {
    console.log(error);
  }
};
