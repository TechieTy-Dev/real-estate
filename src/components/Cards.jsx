import React from 'react'
import house from '../assets/ContentPicutre.png'
const Cards = () => {
  return (
    <div className='card-group columns'>
<div className="card">
  <a href="/Property">
  <img width={320} height={220} src={house} alt="housing" />
  <div className="card-content">
    <div className='glass-card'>$399,599</div>
    <div className='card-address'>
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
        <p className='card-text'>03012 Connor Mills Dr. Dallas, TX 75252</p>
        </div>
        <div className="card-sqft">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_461_7)">
<path d="M15 24V11L17.8733 13.8733L16.9272 14.8194L17.4178 15.31L18.3639 14.3639L20.186 16.186L19.2399 17.1321L19.7305 17.6226L20.6766 16.6766L22.4987 18.4987L21.5526 19.4447L22.0431 19.9353L22.9892 18.9892L24.8113 20.8113L23.8652 21.7574L24.3558 22.248L25.3019 21.3019L28 24H15ZM17.1024 21.8976H22.9191L17.1024 16.0809V21.8976Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_461_7" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_461_7"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_461_7" result="shape"/>
</filter>
</defs>
</svg>
<p className='card-text'>2,000 Sq Ft</p>
        </div>
        <div className='card-info'>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 3.92857V0H1.6V3.92857H0V9.42857H1.064L1.6 11H2.4L2.936 9.42857H13.072L13.6 11H14.4L14.936 9.42857H16V3.92857H14.4ZM7.2 3.92857H3.2V1.57143H7.2V3.92857ZM12.8 3.92857H8.8V1.57143H12.8V3.92857Z" fill="black"/>
</svg>
<p className='card-text'>3 beds</p>
<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3 4.78927H3.5V2.81391C3.5 2.13173 3.9746 1.49814 4.6627 1.3873C4.86369 1.35387 5.06972 1.36368 5.26643 1.41606C5.46314 1.46844 5.64579 1.56212 5.80166 1.69058C5.95754 1.81903 6.08287 1.97917 6.16894 2.15982C6.25501 2.34048 6.29973 2.53731 6.3 2.73659H7.7C7.69966 2.35431 7.61746 1.97634 7.45868 1.62698C7.29991 1.27763 7.06807 0.964627 6.77809 0.708121C6.48811 0.451615 6.14641 0.257283 5.77497 0.137629C5.40353 0.0179739 5.01058 -0.0243543 4.6214 0.0133675C3.1661 0.151581 2.1 1.42903 2.1 2.85838V4.78927H0.7C0.514348 4.78927 0.336301 4.86136 0.205025 4.98968C0.0737498 5.118 0 5.29203 0 5.4735V6.84196C0 8.62505 1.1718 10.142 2.8 10.7078V13H4.2V10.9473H9.8V13H11.2V10.7078C12.8282 10.142 14 8.62505 14 6.84196V5.4735C14 5.29203 13.9263 5.118 13.795 4.98968C13.6637 4.86136 13.4857 4.78927 13.3 4.78927Z" fill="black"/>
</svg>
<p className='card-text'>3 Baths</p>
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_16)">
<path d="M6.24867 0.080638C6.32206 0.0283849 6.40991 0.000305176 6.5 0.000305176C6.59009 0.000305176 6.67794 0.0283849 6.75133 0.080638L12.818 4.41397C12.8742 4.45402 12.9201 4.50692 12.9518 4.56827C12.9834 4.62963 13 4.69766 13 4.76671V12.5667C13 12.6816 12.9543 12.7919 12.8731 12.8731C12.7918 12.9544 12.6816 13 12.5667 13H11.2667V6.0667H1.73333V13H0.433333C0.318406 13 0.208186 12.9544 0.12692 12.8731C0.0456546 12.7919 0 12.6816 0 12.5667V4.76671C4.25718e-05 4.69766 0.0165816 4.62963 0.0482394 4.56827C0.0798973 4.50692 0.125757 4.45402 0.182 4.41397L6.24867 0.080638Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.6001 13H10.4001V9.53333H2.6001V13ZM7.8001 11.2667H5.2001V10.4H7.8001V11.2667Z" fill="black"/>
<path d="M10.4001 8.66668V6.93335H2.6001V8.66668H10.4001Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_461_16">
<rect width="13" height="13" fill="white"/>
</clipPath>
</defs>
</svg>
<p className='card-text'>2 Car</p>
        </div>
        </div>
        </a>
      </div>
      <div className="card">
      <a href="/Property">
      <img width={320} height={220} src={house} alt="housing" />
      <div className="card-content">
        <div className='glass-card'>$399,599</div>
        <div className='card-address'>
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
            <p className='card-text'>03012 Connor Mills Dr. Dallas, TX 75252</p>
            </div>
            <div className="card-sqft">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_461_7)">
    <path d="M15 24V11L17.8733 13.8733L16.9272 14.8194L17.4178 15.31L18.3639 14.3639L20.186 16.186L19.2399 17.1321L19.7305 17.6226L20.6766 16.6766L22.4987 18.4987L21.5526 19.4447L22.0431 19.9353L22.9892 18.9892L24.8113 20.8113L23.8652 21.7574L24.3558 22.248L25.3019 21.3019L28 24H15ZM17.1024 21.8976H22.9191L17.1024 16.0809V21.8976Z" fill="black"/>
    </g>
    <defs>
    <filter id="filter0_d_461_7" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="7.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_461_7"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_461_7" result="shape"/>
    </filter>
    </defs>
    </svg>
    <p className='card-text'>2,000 Sq Ft</p>
            </div>
            <div className='card-info'>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4 3.92857V0H1.6V3.92857H0V9.42857H1.064L1.6 11H2.4L2.936 9.42857H13.072L13.6 11H14.4L14.936 9.42857H16V3.92857H14.4ZM7.2 3.92857H3.2V1.57143H7.2V3.92857ZM12.8 3.92857H8.8V1.57143H12.8V3.92857Z" fill="black"/>
    </svg>
    <p className='card-text'>3 beds</p>
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3 4.78927H3.5V2.81391C3.5 2.13173 3.9746 1.49814 4.6627 1.3873C4.86369 1.35387 5.06972 1.36368 5.26643 1.41606C5.46314 1.46844 5.64579 1.56212 5.80166 1.69058C5.95754 1.81903 6.08287 1.97917 6.16894 2.15982C6.25501 2.34048 6.29973 2.53731 6.3 2.73659H7.7C7.69966 2.35431 7.61746 1.97634 7.45868 1.62698C7.29991 1.27763 7.06807 0.964627 6.77809 0.708121C6.48811 0.451615 6.14641 0.257283 5.77497 0.137629C5.40353 0.0179739 5.01058 -0.0243543 4.6214 0.0133675C3.1661 0.151581 2.1 1.42903 2.1 2.85838V4.78927H0.7C0.514348 4.78927 0.336301 4.86136 0.205025 4.98968C0.0737498 5.118 0 5.29203 0 5.4735V6.84196C0 8.62505 1.1718 10.142 2.8 10.7078V13H4.2V10.9473H9.8V13H11.2V10.7078C12.8282 10.142 14 8.62505 14 6.84196V5.4735C14 5.29203 13.9263 5.118 13.795 4.98968C13.6637 4.86136 13.4857 4.78927 13.3 4.78927Z" fill="black"/>
    </svg>
    <p className='card-text'>3 Baths</p>
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_461_16)">
    <path d="M6.24867 0.080638C6.32206 0.0283849 6.40991 0.000305176 6.5 0.000305176C6.59009 0.000305176 6.67794 0.0283849 6.75133 0.080638L12.818 4.41397C12.8742 4.45402 12.9201 4.50692 12.9518 4.56827C12.9834 4.62963 13 4.69766 13 4.76671V12.5667C13 12.6816 12.9543 12.7919 12.8731 12.8731C12.7918 12.9544 12.6816 13 12.5667 13H11.2667V6.0667H1.73333V13H0.433333C0.318406 13 0.208186 12.9544 0.12692 12.8731C0.0456546 12.7919 0 12.6816 0 12.5667V4.76671C4.25718e-05 4.69766 0.0165816 4.62963 0.0482394 4.56827C0.0798973 4.50692 0.125757 4.45402 0.182 4.41397L6.24867 0.080638Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6001 13H10.4001V9.53333H2.6001V13ZM7.8001 11.2667H5.2001V10.4H7.8001V11.2667Z" fill="black"/>
    <path d="M10.4001 8.66668V6.93335H2.6001V8.66668H10.4001Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_461_16">
    <rect width="13" height="13" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    <p className='card-text'>2 Car</p>
            </div>
            </div>
         </a> </div>
          <div className="card">
  <img width={320} height={220} src={house} alt="housing" />
  <div className="card-content">
    <div className='glass-card'>$399,599</div>
    <div className='card-address'>
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
        <p className='card-text'>03012 Connor Mills Dr. Dallas, TX 75252</p>
        </div>
        <div className="card-sqft">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_461_7)">
<path d="M15 24V11L17.8733 13.8733L16.9272 14.8194L17.4178 15.31L18.3639 14.3639L20.186 16.186L19.2399 17.1321L19.7305 17.6226L20.6766 16.6766L22.4987 18.4987L21.5526 19.4447L22.0431 19.9353L22.9892 18.9892L24.8113 20.8113L23.8652 21.7574L24.3558 22.248L25.3019 21.3019L28 24H15ZM17.1024 21.8976H22.9191L17.1024 16.0809V21.8976Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_461_7" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_461_7"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_461_7" result="shape"/>
</filter>
</defs>
</svg>
<p className='card-text'>2,000 Sq Ft</p>
        </div>
        <div className='card-info'>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 3.92857V0H1.6V3.92857H0V9.42857H1.064L1.6 11H2.4L2.936 9.42857H13.072L13.6 11H14.4L14.936 9.42857H16V3.92857H14.4ZM7.2 3.92857H3.2V1.57143H7.2V3.92857ZM12.8 3.92857H8.8V1.57143H12.8V3.92857Z" fill="black"/>
</svg>
<p className='card-text'>3 beds</p>
<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3 4.78927H3.5V2.81391C3.5 2.13173 3.9746 1.49814 4.6627 1.3873C4.86369 1.35387 5.06972 1.36368 5.26643 1.41606C5.46314 1.46844 5.64579 1.56212 5.80166 1.69058C5.95754 1.81903 6.08287 1.97917 6.16894 2.15982C6.25501 2.34048 6.29973 2.53731 6.3 2.73659H7.7C7.69966 2.35431 7.61746 1.97634 7.45868 1.62698C7.29991 1.27763 7.06807 0.964627 6.77809 0.708121C6.48811 0.451615 6.14641 0.257283 5.77497 0.137629C5.40353 0.0179739 5.01058 -0.0243543 4.6214 0.0133675C3.1661 0.151581 2.1 1.42903 2.1 2.85838V4.78927H0.7C0.514348 4.78927 0.336301 4.86136 0.205025 4.98968C0.0737498 5.118 0 5.29203 0 5.4735V6.84196C0 8.62505 1.1718 10.142 2.8 10.7078V13H4.2V10.9473H9.8V13H11.2V10.7078C12.8282 10.142 14 8.62505 14 6.84196V5.4735C14 5.29203 13.9263 5.118 13.795 4.98968C13.6637 4.86136 13.4857 4.78927 13.3 4.78927Z" fill="black"/>
</svg>
<p className='card-text'>3 Baths</p>
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_16)">
<path d="M6.24867 0.080638C6.32206 0.0283849 6.40991 0.000305176 6.5 0.000305176C6.59009 0.000305176 6.67794 0.0283849 6.75133 0.080638L12.818 4.41397C12.8742 4.45402 12.9201 4.50692 12.9518 4.56827C12.9834 4.62963 13 4.69766 13 4.76671V12.5667C13 12.6816 12.9543 12.7919 12.8731 12.8731C12.7918 12.9544 12.6816 13 12.5667 13H11.2667V6.0667H1.73333V13H0.433333C0.318406 13 0.208186 12.9544 0.12692 12.8731C0.0456546 12.7919 0 12.6816 0 12.5667V4.76671C4.25718e-05 4.69766 0.0165816 4.62963 0.0482394 4.56827C0.0798973 4.50692 0.125757 4.45402 0.182 4.41397L6.24867 0.080638Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.6001 13H10.4001V9.53333H2.6001V13ZM7.8001 11.2667H5.2001V10.4H7.8001V11.2667Z" fill="black"/>
<path d="M10.4001 8.66668V6.93335H2.6001V8.66668H10.4001Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_461_16">
<rect width="13" height="13" fill="white"/>
</clipPath>
</defs>
</svg>
<p className='card-text'>2 Car</p>
        </div>
        </div>
      </div>
      <div className="card">
      <img width={320} height={220} src={house} alt="housing" />
      <div className="card-content">
        <div className='glass-card'>$399,599</div>
        <div className='card-address'>
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
            <p className='card-text'>03012 Connor Mills Dr. Dallas, TX 75252</p>
            </div>
            <div className="card-sqft">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_461_7)">
    <path d="M15 24V11L17.8733 13.8733L16.9272 14.8194L17.4178 15.31L18.3639 14.3639L20.186 16.186L19.2399 17.1321L19.7305 17.6226L20.6766 16.6766L22.4987 18.4987L21.5526 19.4447L22.0431 19.9353L22.9892 18.9892L24.8113 20.8113L23.8652 21.7574L24.3558 22.248L25.3019 21.3019L28 24H15ZM17.1024 21.8976H22.9191L17.1024 16.0809V21.8976Z" fill="black"/>
    </g>
    <defs>
    <filter id="filter0_d_461_7" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="7.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_461_7"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_461_7" result="shape"/>
    </filter>
    </defs>
    </svg>
    <p className='card-text'>2,000 Sq Ft</p>
            </div>
            <div className='card-info'>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4 3.92857V0H1.6V3.92857H0V9.42857H1.064L1.6 11H2.4L2.936 9.42857H13.072L13.6 11H14.4L14.936 9.42857H16V3.92857H14.4ZM7.2 3.92857H3.2V1.57143H7.2V3.92857ZM12.8 3.92857H8.8V1.57143H12.8V3.92857Z" fill="black"/>
    </svg>
    <p className='card-text'>3 beds</p>
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3 4.78927H3.5V2.81391C3.5 2.13173 3.9746 1.49814 4.6627 1.3873C4.86369 1.35387 5.06972 1.36368 5.26643 1.41606C5.46314 1.46844 5.64579 1.56212 5.80166 1.69058C5.95754 1.81903 6.08287 1.97917 6.16894 2.15982C6.25501 2.34048 6.29973 2.53731 6.3 2.73659H7.7C7.69966 2.35431 7.61746 1.97634 7.45868 1.62698C7.29991 1.27763 7.06807 0.964627 6.77809 0.708121C6.48811 0.451615 6.14641 0.257283 5.77497 0.137629C5.40353 0.0179739 5.01058 -0.0243543 4.6214 0.0133675C3.1661 0.151581 2.1 1.42903 2.1 2.85838V4.78927H0.7C0.514348 4.78927 0.336301 4.86136 0.205025 4.98968C0.0737498 5.118 0 5.29203 0 5.4735V6.84196C0 8.62505 1.1718 10.142 2.8 10.7078V13H4.2V10.9473H9.8V13H11.2V10.7078C12.8282 10.142 14 8.62505 14 6.84196V5.4735C14 5.29203 13.9263 5.118 13.795 4.98968C13.6637 4.86136 13.4857 4.78927 13.3 4.78927Z" fill="black"/>
    </svg>
    <p className='card-text'>3 Baths</p>
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_461_16)">
    <path d="M6.24867 0.080638C6.32206 0.0283849 6.40991 0.000305176 6.5 0.000305176C6.59009 0.000305176 6.67794 0.0283849 6.75133 0.080638L12.818 4.41397C12.8742 4.45402 12.9201 4.50692 12.9518 4.56827C12.9834 4.62963 13 4.69766 13 4.76671V12.5667C13 12.6816 12.9543 12.7919 12.8731 12.8731C12.7918 12.9544 12.6816 13 12.5667 13H11.2667V6.0667H1.73333V13H0.433333C0.318406 13 0.208186 12.9544 0.12692 12.8731C0.0456546 12.7919 0 12.6816 0 12.5667V4.76671C4.25718e-05 4.69766 0.0165816 4.62963 0.0482394 4.56827C0.0798973 4.50692 0.125757 4.45402 0.182 4.41397L6.24867 0.080638Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6001 13H10.4001V9.53333H2.6001V13ZM7.8001 11.2667H5.2001V10.4H7.8001V11.2667Z" fill="black"/>
    <path d="M10.4001 8.66668V6.93335H2.6001V8.66668H10.4001Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_461_16">
    <rect width="13" height="13" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    <p className='card-text'>2 Car</p>
            </div>
            </div>
          </div>
          </div>
  )
}

export default Cards