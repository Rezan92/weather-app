export const fetchData = async (url, setCityWeatherInfo, setIfError) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod >= 400) {
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
