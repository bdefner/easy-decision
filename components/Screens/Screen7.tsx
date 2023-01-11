import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CompareSlider from '../../components/CompareSlider';
import { colors, spacing } from '../../styles/styleConstants';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

// Compare qualities screen

export default function Screen7(props: Props) {
  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>Compare your qualities / resources</h2>
          <p style={{ textAlign: 'center' }}>What is more important to you?</p>
          <CompareSlider
            a={props.qualities[0] === '' ? false : props.qualities[0]}
            b={props.qualities[1] === '' ? false : props.qualities[1]}
            aDirection={props.qualitiesDirectionArray[0]}
            bDirection={props.qualitiesDirectionArray[1]}
            index={0}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[0] === '' ? false : props.qualities[0]}
            b={props.qualities[2] === '' ? false : props.qualities[2]}
            aDirection={props.qualitiesDirectionArray[0]}
            bDirection={props.qualitiesDirectionArray[2]}
            index={1}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[0] === '' ? false : props.qualities[0]}
            b={props.qualities[3] === '' ? false : props.qualities[3]}
            aDirection={props.qualitiesDirectionArray[0]}
            bDirection={props.qualitiesDirectionArray[3]}
            index={2}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[0] === '' ? false : props.qualities[0]}
            b={props.qualities[4] === '' ? false : props.qualities[4]}
            aDirection={props.qualitiesDirectionArray[0]}
            bDirection={props.qualitiesDirectionArray[4]}
            index={3}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[0] === '' ? false : props.qualities[0]}
            b={props.qualities[5] === '' ? false : props.qualities[5]}
            aDirection={props.qualitiesDirectionArray[0]}
            bDirection={props.qualitiesDirectionArray[5]}
            index={4}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[0] === '' ? false : props.qualities[0]}
            b={props.qualities[6] === '' ? false : props.qualities[6]}
            aDirection={props.qualitiesDirectionArray[0]}
            bDirection={props.qualitiesDirectionArray[6]}
            index={5}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[1] === '' ? false : props.qualities[1]}
            b={props.qualities[2] === '' ? false : props.qualities[2]}
            aDirection={props.qualitiesDirectionArray[1]}
            bDirection={props.qualitiesDirectionArray[2]}
            index={6}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[1] === '' ? false : props.qualities[1]}
            b={props.qualities[3] === '' ? false : props.qualities[3]}
            aDirection={props.qualitiesDirectionArray[1]}
            bDirection={props.qualitiesDirectionArray[3]}
            index={7}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[1] === '' ? false : props.qualities[1]}
            b={props.qualities[4] === '' ? false : props.qualities[4]}
            aDirection={props.qualitiesDirectionArray[1]}
            bDirection={props.qualitiesDirectionArray[4]}
            index={8}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[1] === '' ? false : props.qualities[1]}
            b={props.qualities[5] === '' ? false : props.qualities[5]}
            aDirection={props.qualitiesDirectionArray[1]}
            bDirection={props.qualitiesDirectionArray[5]}
            index={9}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[1] === '' ? false : props.qualities[1]}
            b={props.qualities[6] === '' ? false : props.qualities[6]}
            aDirection={props.qualitiesDirectionArray[1]}
            bDirection={props.qualitiesDirectionArray[6]}
            index={10}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[2] === '' ? false : props.qualities[2]}
            b={props.qualities[3] === '' ? false : props.qualities[3]}
            aDirection={props.qualitiesDirectionArray[2]}
            bDirection={props.qualitiesDirectionArray[3]}
            index={11}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[2] === '' ? false : props.qualities[2]}
            b={props.qualities[4] === '' ? false : props.qualities[4]}
            aDirection={props.qualitiesDirectionArray[2]}
            bDirection={props.qualitiesDirectionArray[4]}
            index={12}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[2] === '' ? false : props.qualities[2]}
            b={props.qualities[5] === '' ? false : props.qualities[5]}
            aDirection={props.qualitiesDirectionArray[2]}
            bDirection={props.qualitiesDirectionArray[5]}
            index={13}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[2] === '' ? false : props.qualities[2]}
            b={props.qualities[6] === '' ? false : props.qualities[6]}
            aDirection={props.qualitiesDirectionArray[2]}
            bDirection={props.qualitiesDirectionArray[6]}
            index={14}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[3] === '' ? false : props.qualities[3]}
            b={props.qualities[4] === '' ? false : props.qualities[4]}
            aDirection={props.qualitiesDirectionArray[3]}
            bDirection={props.qualitiesDirectionArray[4]}
            index={15}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[3] === '' ? false : props.qualities[3]}
            b={props.qualities[5] === '' ? false : props.qualities[5]}
            aDirection={props.qualitiesDirectionArray[3]}
            bDirection={props.qualitiesDirectionArray[5]}
            index={16}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[3] === '' ? false : props.qualities[3]}
            b={props.qualities[6] === '' ? false : props.qualities[6]}
            aDirection={props.qualitiesDirectionArray[3]}
            bDirection={props.qualitiesDirectionArray[6]}
            index={17}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[4] === '' ? false : props.qualities[4]}
            b={props.qualities[5] === '' ? false : props.qualities[5]}
            aDirection={props.qualitiesDirectionArray[4]}
            bDirection={props.qualitiesDirectionArray[5]}
            index={18}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[4] === '' ? false : props.qualities[4]}
            b={props.qualities[6] === '' ? false : props.qualities[6]}
            aDirection={props.qualitiesDirectionArray[4]}
            bDirection={props.qualitiesDirectionArray[6]}
            index={19}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.qualities[5] === '' ? false : props.qualities[5]}
            b={props.qualities[6] === '' ? false : props.qualities[6]}
            aDirection={props.qualitiesDirectionArray[5]}
            bDirection={props.qualitiesDirectionArray[6]}
            index={20}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
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
