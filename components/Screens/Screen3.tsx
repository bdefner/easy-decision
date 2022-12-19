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
          <p style={{ textAlign: 'center' }}>
            You need to set al least three alternatives to make the magic of
            this app work. <br />
            If you only have two options, a good old pro and contra list might
            just do the job.
          </p>
          <div className="bigInputWrap">
            <div id="helpButtonWrap">
              <InfoButton label="help" symbol="?" />
            </div>
          </div>

          {props.alternativesInputFields.map((element: any, index: number) => {
            return (
              <div key={index}>
                <div
                  className={
                    index > 0 && !props.alternatives[index - 1]
                      ? 'disabledInputWrap'
                      : ''
                  }
                >
                  <input
                    className={`smallTextInput`}
                    value={props.alternatives[index]}
                    disabled={
                      index > 0 && !props.alternatives[index - 1] ? true : false
                    }
                    onChange={(event) => {
                      handleInputChange(index, event);
                    }}
                  />
                </div>
              </div>
            );
          })}
          {props.alternatives.length < 5 && (
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
            nextButton={true}
            nextButtonDisabled={props.alternatives.length > 1 ? false : true}
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
