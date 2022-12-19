import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colors, spacing } from '../../styles/styleConstants';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

export default function Screen5(props: Props) {
  const [inputArray, setInputArray] = useState(['', '', '']);

  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>Time to start comparing</h2>
          <p style={{ textAlign: 'center' }}>
            Some things seem hard or impossible to compare. Fo example, if you
            can’t have one without the other. That’s ok! Just let the slider in
            the middle and it won’t effect your results.
          </p>

          <Image
            src="/../public/assets/graphics/example2.jpg"
            alt="Example of comparisons"
            width="595"
            height="93"
            style={{ margin: spacing.medium2 }}
          />
          <p style={{ textAlign: 'center' }}>
            However, don’t skip comparisons too easily. The fewer actual choices
            you make, the less robust your results will be.
          </p>
          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
            nextButton={true}
          />
        </div>
      </section>
    </>
  );
}
