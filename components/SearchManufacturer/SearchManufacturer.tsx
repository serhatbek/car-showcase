'use client';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <ComboboxButton className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              alt='car logo'
              className='ml-4'
            />
          </ComboboxButton>

          <ComboboxInput
            className='search-manufacturer__input'
            placeholder='Volkswagen...'
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.map((item) => {
                return (
                  <ComboboxOption
                    key={item}
                    className={({ selected, focus }) =>
                      `relative search-manufacturer__option ${
                        selected || focus
                          ? 'bg-primary-blue text-white'
                          : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, focus }) => {
                      return (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {item}
                          </span>

                          {/* Show an active blue background color if the option is selected */}
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                focus
                                  ? 'text-white'
                                  : 'text-pribg-primary-purple'
                              }`}
                            ></span>
                          ) : null}
                        </>
                      );
                    }}
                    {/* {item} */}
                  </ComboboxOption>
                );
              })}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
export default SearchManufacturer;
