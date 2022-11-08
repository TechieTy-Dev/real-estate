import React from 'react'
import Navbar from './Navbar'
import house from '../assets/cottage.jpg'

const Property = () => {
  return (
    <div className='bg'>
      <Navbar />
      <div className='property-card'>
      <img src={house} alt="" />
      <div className='property-info'>
        <div className="property-address">
      <svg width="42" height="45" viewBox="0 0 42 45" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_412_79)">
<path className="icon-svg" d="M21 11C19.4093 11.0018 17.8842 11.6233 16.7594 12.728C15.6346 13.8327 15.0019 15.3305 15 16.8929C14.9981 18.1696 15.4227 19.4117 16.2087 20.4286C16.2087 20.4286 16.3724 20.6402 16.3991 20.6707L21 26L25.6031 20.668C25.6271 20.6396 25.7913 20.4286 25.7913 20.4286L25.7918 20.427C26.5774 19.4105 27.0019 18.169 27 16.8929C26.9981 15.3305 26.3654 13.8327 25.2406 12.728C24.1158 11.6233 22.5907 11.0018 21 11ZM21 19.0357C20.5685 19.0357 20.1466 18.91 19.7878 18.6746C19.4291 18.4391 19.1494 18.1044 18.9843 17.7129C18.8191 17.3213 18.7759 16.8905 18.8601 16.4748C18.9443 16.0591 19.1521 15.6773 19.4572 15.3776C19.7624 15.0779 20.1511 14.8739 20.5743 14.7912C20.9976 14.7085 21.4363 14.7509 21.8349 14.9131C22.2336 15.0753 22.5744 15.35 22.8141 15.7023C23.0539 16.0547 23.1818 16.469 23.1818 16.8929C23.1811 17.461 22.951 18.0056 22.542 18.4073C22.133 18.809 21.5784 19.035 21 19.0357Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_412_79" x="0" y="0" width="42" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_412_79"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_412_79" result="shape"/>
</filter>
</defs>
</svg>

      <p>4151 Lambert Bridge <br /> Austin, Texas 75033</p>
      </div>
      <p className="price">$525,900</p>
      <div className='specs'>
        <p>3 Bed</p>
        <p>3 Baths</p>
        <p>3,100 Sq. Ft.</p>
      </div>
      
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo adipisci enim nam, debitis cum atque pariatur aspernatur nulla similique molestias inventore harum magni ab recusandae illo esse quod quaerat!
      </p>
      <button className='cta-btn'>Book a Tour</button>
      <svg className='heart-svg' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.625 10.5C0.65625 7.87505 1.3125 3.93755 4.59375 2.62505C7.875 1.31255 9.84375 3.93755 10.5 5.25005C11.1562 3.93755 13.7812 1.31255 17.0625 2.62505C20.3438 3.93755 20.3438 7.87505 18.375 10.5C16.4062 13.125 10.5 18.375 10.5 18.375C10.5 18.375 4.59375 13.125 2.625 10.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      </div>
      
    </div>
  )
}

export default Property