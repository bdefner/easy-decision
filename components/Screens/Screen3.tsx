import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

export default function Screen3(props: Props) {
  function addInputField() {
    if (props.alternativesInputFields.length < 5) {
      props.setAlternativesInputFields([...props.alternativesInputFields, '']);
    }
  }

  function handleInputChange(index: number, event: any) {
    const newInput = [...props.alternatives];
    newInput[index] = event.target.value;
    props.setAlternatives(newInput);
  }

  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>Define up to 5 alternatives</h2>
          <p>Which decision goals compete against each other?</p>
          <div className="bigInputWrap">
            <div id="helpButtonWrap">
              <InfoButton label="help" symbol="?" />
            </div>
          </div>

          {props.alternativesInputFields.map((element: any, index: number) => {
            return (
              <div key={index}>
                <input
                  className="smallTextInput"
                  value={props.alternatives[index]}
                  onChange={(event) => {
                    handleInputChange(index, event);
                  }}
                />
              </div>
            );
          })}
          {props.alternativesInputFields.length < 5 && (
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
      <section>
        <div className="bottomInfoWrap">
          <p>For example:</p>{' '}
          <p>
            “Keep my current job” vs “Find a new job” vs “Start my own business”{' '}
            <Link href="/">See more examples</Link>
          </p>
        </div>
      </section>
    </>
  );
}
