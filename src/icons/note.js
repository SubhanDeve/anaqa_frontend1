import React from 'react'

const Note = ({ color }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4921 18.4983C14.2537 18.4983 14.0062 18.4891 13.7404 18.4616C13.2637 18.425 12.7229 18.3333 12.1637 18.1958L10.6237 17.8291C6.39791 16.83 5.01374 14.5933 6.00374 10.3766L6.90208 6.53581C7.10374 5.66497 7.34208 4.95914 7.63541 4.37247C9.21208 1.11831 12.2279 1.41164 14.3729 1.91581L15.9037 2.27331C18.0487 2.77747 19.4054 3.57497 20.1662 4.79414C20.9179 6.01331 21.0371 7.58081 20.5329 9.72581L19.6346 13.5575C18.8462 16.9125 17.2054 18.4983 14.4921 18.4983ZM12.0262 2.97914C10.4954 2.97914 9.52374 3.61164 8.87291 4.96831C8.63458 5.46331 8.42374 6.07747 8.24041 6.84747L7.34208 10.6883C6.52624 14.1533 7.47041 15.6658 10.9354 16.4908L12.4754 16.8575C12.9704 16.9766 13.4379 17.05 13.8596 17.0866C16.3529 17.3341 17.5904 16.2433 18.2871 13.2458L19.1854 9.41414C19.5979 7.64497 19.5429 6.40747 18.9929 5.51831C18.4429 4.62914 17.3612 4.02414 15.5829 3.61164L14.0521 3.25414C13.2912 3.07081 12.6129 2.97914 12.0262 2.97914Z" fill={color || '#6C757D'} />
      <path d="M7.63629 20.3958C5.28045 20.3958 3.77712 18.9842 2.81462 16.005L1.64129 12.3842C0.339621 8.35085 1.50379 6.07752 5.51879 4.77585L6.96712 4.30835C7.44379 4.16168 7.80129 4.06085 8.12212 4.00585C8.38795 3.95085 8.64462 4.05168 8.80045 4.26252C8.95629 4.47335 8.98379 4.74835 8.87379 4.98668C8.63545 5.47252 8.42462 6.08668 8.25045 6.85668L7.35212 10.6975C6.53629 14.1625 7.48045 15.675 10.9455 16.5L12.4855 16.8667C12.9805 16.9858 13.448 17.0592 13.8696 17.0958C14.163 17.1233 14.4013 17.325 14.4838 17.6092C14.5571 17.8933 14.4471 18.1867 14.2088 18.3517C13.6038 18.7642 12.843 19.1125 11.8805 19.4242L10.4321 19.9008C9.37795 20.2308 8.46129 20.3958 7.63629 20.3958ZM7.13212 5.70168L5.94962 6.08668C2.67712 7.14085 1.89795 8.68085 2.95212 11.9625L4.12545 15.5833C5.18879 18.8558 6.72879 19.6442 10.0013 18.59L11.4496 18.1133C11.5046 18.095 11.5505 18.0767 11.6055 18.0583L10.6338 17.8292C6.40795 16.83 5.02379 14.5933 6.01379 10.3767L6.91212 6.53585C6.97629 6.24252 7.04962 5.95835 7.13212 5.70168Z" fill={color || '#6C757D'} />
      <path d="M16.0323 9.63415C15.9773 9.63415 15.9223 9.62498 15.8581 9.61581L11.4123 8.48831C11.0456 8.39665 10.8256 8.02081 10.9173 7.65415C11.0089 7.28748 11.3848 7.06748 11.7514 7.15915L16.1973 8.28665C16.5639 8.37831 16.7839 8.75415 16.6923 9.12081C16.6189 9.42331 16.3348 9.63415 16.0323 9.63415Z" fill={color || '#6C757D'} />
      <path d="M13.3467 12.7325C13.2917 12.7325 13.2367 12.7234 13.1725 12.7142L10.505 12.0359C10.1384 11.9442 9.91837 11.5684 10.01 11.2017C10.1017 10.835 10.4775 10.615 10.8442 10.7067L13.5117 11.385C13.8784 11.4767 14.0984 11.8525 14.0067 12.2192C13.9334 12.5309 13.6584 12.7325 13.3467 12.7325Z" fill={color || '#6C757D'} />
    </svg>
  )
}

export default Note

