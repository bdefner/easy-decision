import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colors, spacing } from '../../styles/styleConstants';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

export default function Screen7(props: Props) {
  const [inputArray, setInputArray] = useState(['', '', '']);

  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>Compare your qualities / ressources</h2>
          <p style={{ textAlign: 'center' }}>What is more important to you?</p>
          <div className="sliderComparisonWrap">
            <p>A</p>
            <input type={'range'} min="-10" max="10" className="slider" />
            <p>B</p>
          </div>
          <div className="sliderComparisonWrap">
            <p>A</p>
            <input type={'range'} min="-10" max="10" className="slider" />
            <p>B</p>
          </div>
          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
          />
        </div>
      </section>
    </>
  );
}
