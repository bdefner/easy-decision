import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

export default function Screen4(props: Props) {
  const [inputArray, setInputArray] = useState(['', '', '']);

  const setQualitiesHelper = props.qualities;

  function addInputField() {
    if (props.qualities.length < 7) {
      props.setQualities([...props.qualities, '']);
    }
  }

  function handleInputChange(index: number, event: any) {
    const newInput = [...props.qualities];
    newInput[index] = event.target.value;
    props.setQualities(newInput);
  }

  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>Define up to 7 qualities or resources</h2>
          <p>
            Which qualities and / or resources in your life might be affected by
            your decision?
          </p>
          <div className="bigInputWrap">
            <div id="helpButtonWrap">
              <InfoButton label="help" symbol="?" />
            </div>
          </div>

          {props.qualities.map((element, index) => {
            return (
              <div key={index}>
                <input
                  className="smallTextInput"
                  value={setQualitiesHelper[index]}
                  onChange={(event) => {
                    handleInputChange(index, event);
                  }}
                />
              </div>
            );
          })}
          {props.qualities.length < 7 && (
            <Image
              src="/../public/assets/icons/more.png"
              width="32"
              height="32"
              alt="Click to add more input fields"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                addInputField();
              }}
            />
          )}

          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
          />
        </div>
      </section>
      <div className="bottomInfoWrap">
        <p>For example:</p>{' '}
        <p>
          ”Income”, “Free time”, “Security”, “Financial stability”, “Time with
          my family” <Link href="/">See more examples</Link>
        </p>
      </div>
    </>
  );
}
