import axios from 'axios';

export const fetchCars = async () => {
  const headers = {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  try {
    const response = await axios(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
      {
        headers: headers,
      }
    );
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
