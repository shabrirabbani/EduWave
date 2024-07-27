import React from 'react'

import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Comments from './components/Comments';

export default function LandingPage() {
  return (
    <div>
        <Hero />
        <Comments />
        <Gallery />
    </div>
  );
}
