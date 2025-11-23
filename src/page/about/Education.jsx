import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const Education = () => {
        useEffect(() => {
            // Fix 1: Initialize AOS here
            Aos.init({ duration: 1000 });
        }, []); // Empty array runs it once on mount
    
  return (
   <div class="bg-gray-50 flex flex-col items-center justify-center min-h-full p-6" data-aos="fade-up">

    <div class="w-full max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center tracking-wide">
            Education Background
        </h2>

        <div class="relative flex items-center justify-between w-full">
            <div class="absolute inset-x-0 top-1/2 h-1 bg-teal-500 transform -translate-y-1/2 z-0"></div>

            <div class="relative z-10 flex justify-between w-full">

                <div class="flex flex-col items-center text-center w-1/4 px-2">
                    <div class="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="mt-3 text-sm md:text-base font-semibold text-gray-700">Primary School</p>
                </div>

                <div class="flex flex-col items-center text-center w-1/4 px-2">
                    <div class="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="mt-3 text-sm md:text-base font-semibold text-gray-700">Secondary School</p>
                </div>

                <div class="flex flex-col items-center text-center w-1/4 px-2">
                    <div class="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="mt-3 text-sm md:text-base font-semibold text-gray-700">High School</p>
                </div>

                <div class="flex flex-col items-center text-center w-1/4 px-2">
                    <div class="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p class="mt-3 text-sm md:text-base font-semibold text-gray-700">University</p>
                </div>

            </div>
        </div>
    </div>

</div>
  )
}

export default Education