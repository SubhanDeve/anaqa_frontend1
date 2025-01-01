import React from 'react'

const Dashboard = ({ color }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19824 1.83331H8.02074C9.15983 1.83331 10.0832 2.75673 10.0832 3.89581V5.88498C10.0832 7.02407 9.15983 7.94748 8.02074 7.94748H4.19824C3.05915 7.94748 2.13574 7.02407 2.13574 5.88498V3.89581C2.13574 2.75673 3.05915 1.83331 4.19824 1.83331ZM8.02074 6.57248C8.39837 6.56754 8.7033 6.26261 8.70824 5.88498V3.89581C8.7033 3.51818 8.39837 3.21325 8.02074 3.20831H4.19824C3.82061 3.21325 3.51568 3.51818 3.51074 3.89581V5.88498C3.51568 6.26261 3.82061 6.56754 4.19824 6.57248H8.02074Z" fill={color || '#6C757D'} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5932 1.83331H17.8016C18.9406 1.83331 19.8641 2.75673 19.8641 3.89581V10.1566C19.8641 11.2957 18.9406 12.2191 17.8016 12.2191H14.5932C14.0455 12.2216 13.5194 12.0051 13.1321 11.6178C12.7448 11.2304 12.5283 10.7044 12.5307 10.1566V3.89581C12.5307 2.75673 13.4541 1.83331 14.5932 1.83331ZM17.8016 10.8441C18.1812 10.8441 18.4891 10.5363 18.4891 10.1566V3.89581C18.4841 3.51818 18.1792 3.21325 17.8016 3.20831H14.5932C14.2135 3.20831 13.9057 3.51612 13.9057 3.89581V10.1566C13.9032 10.3397 13.9749 10.5161 14.1043 10.6455C14.2338 10.775 14.4101 10.8466 14.5932 10.8441H17.8016Z" fill={color || '#6C757D'} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5932 14.6666H17.8016C18.9407 14.6666 19.8641 15.5901 19.8641 16.7291V18.1041C19.8641 19.2432 18.9407 20.1666 17.8016 20.1666H14.5932C13.4542 20.1666 12.5307 19.2432 12.5307 18.1041V16.7291C12.5307 15.5901 13.4542 14.6666 14.5932 14.6666ZM17.8016 18.7916C18.1792 18.7867 18.4841 18.4818 18.4891 18.1041V16.7291C18.4841 16.3515 18.1792 16.0466 17.8016 16.0416H14.5932C14.2135 16.0416 13.9057 16.3495 13.9057 16.7291V18.1041C13.9057 18.4838 14.2135 18.7916 14.5932 18.7916H17.8016Z" fill={color || '#6C757D'} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19824 10.3858H8.02074C9.15983 10.3858 10.0832 11.3092 10.0832 12.4483V18.1041C10.0832 19.2432 9.15983 20.1666 8.02074 20.1666H4.19824C3.05915 20.1666 2.13574 19.2432 2.13574 18.1041V12.4483C2.13574 11.3092 3.05915 10.3858 4.19824 10.3858ZM8.02074 18.7916C8.39837 18.7867 8.7033 18.4818 8.70824 18.1041V12.4483C8.7033 12.0707 8.39837 11.7657 8.02074 11.7608H4.19824C3.82061 11.7657 3.51568 12.0707 3.51074 12.4483V18.1041C3.51568 18.4818 3.82061 18.7867 4.19824 18.7916H8.02074Z" fill={color || '#6C757D'} />
    </svg>
  )
}

export default Dashboard