import Lottie from 'lottie-react';
import React from 'react'
import notfound from '../assets/animation/notfound.json'

export default function NotFound() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <div className='w-1/3 ms-96'>
                <Lottie animationData={notfound}/>
            </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            404 Not Found, Sorry!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Please check the URL in the address bar and try again.
          </p>
        </div>
      </section>
    </div>
  );
}
