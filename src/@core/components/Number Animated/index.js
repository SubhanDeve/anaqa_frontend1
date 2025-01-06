import React, { useEffect, useState } from 'react'
import styles from '/styles/odometer.module.css'

const AnimatedNumber = ({ targetValue }) => {
  const [currentValue, setCurrentValue] = useState(0);

  // Effect to update the target value whenever the prop changes
  useEffect(() => {
    if (targetValue >= 0 && targetValue <= 9) {
      setCurrentValue(targetValue);
    }
  }, [targetValue]);

  // Calculate translateY based on the current value
  const translateY = -(currentValue * 50); // Each number is 50px tall

  return (
    <div className={styles.container}>
      <div className={styles.odometerWrap}>
        <ol
          className={styles.odometer}
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default AnimatedNumber
