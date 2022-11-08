import React from 'react'
import { Navbar } from '../components'
import profile from '../assets/julian-wan-WNoLnJo7tS8-unsplash.jpg'

const Profile = () => {
  return (
    <div className='bg'>
      <Navbar/>
      <div className="profile-heading">
      <h3>About</h3>
      <h1>John Jones</h1>
      <h4>Broker</h4>
      </div>
      <img className='profile-pic' src={profile} alt="Profile"/>
      
      <p className="profile-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quo sunt, voluptas quidem nam accusamus. Nihil ab molestiae in similique id, itaque, veritatis quod iusto autem dolores minima doloribus assumenda.
      Maxime inventore tempore omnis dolorem quisquam, repellat praesentium esse illo perspiciatis, ad expedita accusantium ullam, obcaecati explicabo accusamus labore est! Dignissimos ducimus magnam dolorum voluptas! Tenetur sed facilis eos necessitatibus.
      Voluptatibus quaerat corrupti corporis autem similique ad eius illo maxime recusandae dolores. Repellendus eum corporis architecto quam aliquid nam ratione rem, dignissimos magnam ducimus dolorem similique tempora repellat quisquam quasi?</p>
      <div className="profile-footer">
        <div className="profile-email">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.222 0.666687H1.77756C1.54181 0.666687 1.31572 0.760338 1.14902 0.927036C0.982322 1.09374 0.888672 1.31983 0.888672 1.55558V10.4445C0.888672 10.6802 0.982322 10.9063 1.14902 11.073C1.31572 11.2397 1.54181 11.3334 1.77756 11.3334H14.222C14.4578 11.3334 14.6838 11.2397 14.8505 11.073C15.0172 10.9063 15.1109 10.6802 15.1109 10.4445V1.55558C15.1109 1.31983 15.0172 1.09374 14.8505 0.927036C14.6838 0.760338 14.4578 0.666687 14.222 0.666687ZM13.5376 10.4445H2.51534L5.62645 7.22669L4.98645 6.60891L1.77756 9.92891V2.23113L7.30201 7.72891C7.46855 7.89447 7.69384 7.98739 7.92867 7.98739C8.1635 7.98739 8.38879 7.89447 8.55534 7.72891L14.222 2.09335V9.87113L10.9509 6.60002L10.3242 7.22669L13.5376 10.4445ZM2.35978 1.55558H13.502L7.92867 7.0978L2.35978 1.55558Z" fill="white"/>
</svg>

        <p>JohnJones@RealEstate.com</p>
        </div>
        <div className="profile-number">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 13.5H11.9149C2.08988 12.935 0.69488 4.645 0.49988 2.115C0.484167 1.91829 0.507424 1.72041 0.568317 1.53271C0.62921 1.345 0.726543 1.17115 0.854738 1.02113C0.982934 0.8711 1.13947 0.747844 1.31538 0.65842C1.4913 0.568996 1.68313 0.515161 1.87988 0.5H4.63488C4.83516 0.499807 5.03088 0.559755 5.1967 0.672081C5.36251 0.784407 5.49078 0.943935 5.56488 1.13L6.32488 3C6.39806 3.18177 6.41621 3.38104 6.3771 3.57305C6.33799 3.76505 6.24333 3.94134 6.10488 4.08L5.03988 5.155C5.20624 6.10037 5.65897 6.97183 6.33683 7.65148C7.01468 8.33112 7.88495 8.78615 8.82988 8.955L9.91488 7.88C10.0556 7.74308 10.2336 7.65063 10.4265 7.61417C10.6195 7.57771 10.8189 7.59887 10.9999 7.675L12.8849 8.43C13.0681 8.50644 13.2245 8.63571 13.334 8.80134C13.4435 8.96696 13.5013 9.16144 13.4999 9.36V12C13.4999 12.3978 13.3418 12.7794 13.0605 13.0607C12.7792 13.342 12.3977 13.5 11.9999 13.5ZM1.99988 1.5C1.86727 1.5 1.74009 1.55268 1.64633 1.64645C1.55256 1.74022 1.49988 1.86739 1.49988 2V2.04C1.72988 5 3.20488 12 11.9699 12.5C12.0356 12.5041 12.1014 12.4951 12.1636 12.4737C12.2259 12.4522 12.2832 12.4187 12.3325 12.375C12.3817 12.3314 12.4218 12.2784 12.4506 12.2192C12.4793 12.16 12.4961 12.0957 12.4999 12.03V9.36L10.6149 8.605L9.17988 10.03L8.93988 10C4.58988 9.455 3.99988 5.105 3.99988 5.06L3.96988 4.82L5.38988 3.385L4.63988 1.5H1.99988Z" fill="white"/>
</svg>

        <p>+1 (029)-829-9012</p>
        </div>
        <div className="profile-office">
        <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_412_79)">
<path d="M21 11C19.4093 11.0018 17.8842 11.6233 16.7594 12.728C15.6346 13.8327 15.0019 15.3305 15 16.8929C14.9981 18.1696 15.4227 19.4117 16.2087 20.4286C16.2087 20.4286 16.3724 20.6402 16.3991 20.6707L21 26L25.6031 20.668C25.6271 20.6396 25.7913 20.4286 25.7913 20.4286L25.7918 20.427C26.5774 19.4105 27.0019 18.169 27 16.8929C26.9981 15.3305 26.3654 13.8327 25.2406 12.728C24.1158 11.6233 22.5907 11.0018 21 11ZM21 19.0357C20.5685 19.0357 20.1466 18.91 19.7878 18.6746C19.4291 18.4391 19.1494 18.1044 18.9843 17.7129C18.8191 17.3213 18.7759 16.8905 18.8601 16.4748C18.9443 16.0591 19.1521 15.6773 19.4572 15.3776C19.7624 15.0779 20.1511 14.8739 20.5743 14.7912C20.9976 14.7085 21.4363 14.7509 21.8349 14.9131C22.2336 15.0753 22.5744 15.35 22.8141 15.7023C23.0539 16.0547 23.1818 16.469 23.1818 16.8929C23.1811 17.461 22.951 18.0056 22.542 18.4073C22.133 18.809 21.5784 19.035 21 19.0357Z" fill="black"/>
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

        <p>001 Main St. City, State, 00000</p>
        </div>
      </div>
    </div>
  )
}

export default Profile