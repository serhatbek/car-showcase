import { CarProps, FilterProps } from '@/types';
import axios from 'axios';

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  try {
    const response = await axios(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
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

export const generateCardImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { model, make, year } = car;

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
  );
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
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
