import { useEffect } from 'react';
import Stepper from './Stepper';

function Odometer({ number }) {

  useEffect(() => {
    const stepperValues = document.getElementsByClassName('stepper-value');
    const steppers = document.getElementsByClassName('stepper');

    function animateToZero(e) {
      const stepper = e.target.closest('.stepper');
      stepper.style.top = '0px';
      stepper.style.transition = '200ms';
    }

    function animateToTarget(e) {
      const stepper = e.target.closest('.stepper');
      const targetNumber = parseInt(stepper.dataset.num, 10);
      stepper.style.top = `-${20 * targetNumber}px`;
      stepper.style.transition = '200ms';
    }

    // Initial page load animation
    function animateOnLoad() {
      [...steppers].forEach((stepper) => {
        const targetNumber = parseInt(stepper.dataset.num, 10);
        stepper.style.top = `-${20 * targetNumber}px`;
        stepper.style.fontSize = '24px';
        stepper.style.fontWeight = '600';
        stepper.style.color = '#1C1C1C';
        stepper.style.transition = '2s';
      });
    }

    // Trigger the initial animation on page load
    requestAnimationFrame(animateOnLoad);

    // Add event listeners for mouse animations
    [...stepperValues].forEach((stepperValue) => {
      stepperValue.addEventListener('mouseover', animateToZero);
      stepperValue.addEventListener('mouseout', animateToTarget);
    });

    // Cleanup event listeners on unmount
    return () => {
      [...stepperValues].forEach((stepperValue) => {
        stepperValue.removeEventListener('mouseover', animateToZero);
        stepperValue.removeEventListener('mouseout', animateToTarget);
      });
    };
  }, []);

  const nums = `${number}`.split("");

  return (
    <div className="odometer">
      {nums.map((value, index) =>
        value === "," ? (
          <div key={index} className="comma">
            {value}
          </div>
        ) : (
          <Stepper key={index} num={value} />
        )
      )}
    </div>
  );
}

export default Odometer;
