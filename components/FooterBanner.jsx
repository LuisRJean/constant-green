import React from 'react';
import Link from 'next/link';

import { urlFor } from '../constant-green-farm/lib/client';


const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        </div>
        <div className="right">
        </div>




      </div>
      <img
        src="https://cdn.sanity.io/images/763jxe6w/production/ac723f1630169acfef668141685c71e8902fe3d2-512x288.webp"
      />
    </div>
  )
}

export default FooterBanner