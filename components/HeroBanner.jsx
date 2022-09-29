import React from 'react'
import Link from 'next/link';
import { urlFor } from '../constant-green-farm/lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="broccoli">sunflowers</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="sunflower" className="hero-banner-image" />


        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
          <h5>
            Description
          </h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner