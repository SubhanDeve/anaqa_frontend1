import React from 'react'

const Ticket = ({ color }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2989 20.8542H6.70053C2.87803 20.8542 1.71387 19.69 1.71387 15.8675V15.4459C1.71387 15.07 2.02553 14.7584 2.40137 14.7584C3.20803 14.7584 3.86803 14.0984 3.86803 13.2917C3.86803 12.485 3.20803 11.825 2.40137 11.825C2.02553 11.825 1.71387 11.5134 1.71387 11.1375V10.7159C1.71387 6.89335 2.87803 5.72919 6.70053 5.72919H15.2989C19.1214 5.72919 20.2855 6.89335 20.2855 10.7159V11.5775C20.2855 11.9534 19.9739 12.265 19.598 12.265C18.7914 12.265 18.1314 12.925 18.1314 13.7317C18.1314 14.5384 18.7914 15.1892 19.598 15.1892C19.9739 15.1892 20.2855 15.5009 20.2855 15.8767C20.2764 19.69 19.1122 20.8542 15.2989 20.8542ZM3.09803 16.0509C3.11637 18.9659 3.69387 19.4792 6.7097 19.4792H15.308C18.168 19.4792 18.828 19.0117 18.9105 16.4725C17.6822 16.1609 16.7655 15.0517 16.7655 13.7225C16.7655 12.3934 17.6822 11.275 18.9197 10.9634V10.7067C18.9197 7.63585 18.3789 7.09502 15.308 7.09502H6.70053C3.69387 7.09502 3.11637 7.61752 3.08887 10.5234C4.32637 10.835 5.24303 11.9534 5.24303 13.2825C5.24303 14.6117 4.32637 15.7392 3.09803 16.0509Z" fill={color || '#6C757D'} />
      <path d="M9.16699 9.39585C8.79116 9.39585 8.47949 9.08419 8.47949 8.70835V6.41669C8.47949 6.04085 8.79116 5.72919 9.16699 5.72919C9.54283 5.72919 9.85449 6.04085 9.85449 6.41669V8.70835C9.85449 9.08419 9.54283 9.39585 9.16699 9.39585Z" fill={color || '#6C757D'} />
      <path d="M9.16699 15.51C8.79116 15.51 8.47949 15.1984 8.47949 14.8225V11.77C8.47949 11.3942 8.79116 11.0825 9.16699 11.0825C9.54283 11.0825 9.85449 11.3942 9.85449 11.77V14.8225C9.85449 15.1984 9.54283 15.51 9.16699 15.51Z" fill={color || '#6C757D'} />
      <path d="M9.16699 20.8542C8.79116 20.8542 8.47949 20.5425 8.47949 20.1667V17.875C8.47949 17.4992 8.79116 17.1875 9.16699 17.1875C9.54283 17.1875 9.85449 17.4992 9.85449 17.875V20.1667C9.85449 20.5425 9.54283 20.8542 9.16699 20.8542Z" fill={color || '#6C757D'} />
      <path d="M14.9697 7.10415H6.63715C6.36215 7.10415 6.10548 6.93915 6.00465 6.68248C5.90382 6.42582 5.95882 6.12332 6.15132 5.93082L8.83715 3.24498C11.3122 0.769983 12.8247 0.769983 15.2905 3.24498L15.8405 3.79498C15.9688 3.92332 16.0422 4.09748 16.0422 4.28082C16.0422 4.46415 15.9688 4.63832 15.8405 4.76665C15.4738 5.13332 15.373 5.67415 15.5838 6.14165C15.6847 6.35248 15.6663 6.59998 15.538 6.80165C15.4188 6.98498 15.1988 7.10415 14.9697 7.10415ZM8.29632 5.72915H14.0988C14.0805 5.24332 14.1997 4.75748 14.4472 4.33582L14.328 4.21665C12.4122 2.30082 11.7338 2.30082 9.81798 4.21665L8.29632 5.72915Z" fill={color || '#6C757D'} />
    </svg>
  )
}

export default Ticket