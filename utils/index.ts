import axios from 'axios';

export const fetchCars = async () => {
  const headers = {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
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

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // dollars per day
  const mileageFactor = 0.1; // additional rate per mile
  const ageFactor = 0.05; // additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
