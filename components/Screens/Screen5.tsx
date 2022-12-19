import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { colors, spacing } from '../../styles/styleConstants';
import InfoButton from '../InfoButton';
import QueryContextProvider from '../QueryContextProvider';
import QueryNavigation from '../QueryNavigation';

export default function Screen5(props: Props) {
  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>Time to start comparing</h2>
          <p style={{ textAlign: 'center' }}>
            In the following you will be asked to compare ech element of your
            question against each other. <br /> For example: “What is more
            important to you “Time for hobbies” or “Increased income”. <br />{' '}
            You can answer the question by pulling a slider:
          </p>

          <div
            className="mainButton button2"
            onClick={() => {
              props.setScreen(props.screen + 2);
            }}
          >
            skip the explanations
          </div>

          <Image
            src="/../public/assets/graphics/example1.jpg"
            alt="Example of comparisons"
            width="755"
            height="483"
            style={{ margin: spacing.medium2 }}
          />

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
