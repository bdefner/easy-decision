import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { spacing } from '../../styles/styleConstants';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

// Set qualities screen

export default function Screen4(props: Props) {
  const setQualitiesHelper = props.qualities;

  function addInputField() {
    if (props.qualitiesInputFields.length < 7) {
      props.setQualitiesInputFields([...props.qualitiesInputFields, '']);
    }
  }

  function handleChangeOfInputField(index: number, event: any) {
    const newInput = [...props.qualities];
    newInput[index] = event.target.value;
    props.setQualities(newInput);
  }

  function handleChangeOfQualityDirection(index: number, direction: string) {
    const newDirection = [...props.qualitiesDirectionArray];
    newDirection[index] = direction;
    props.setQualitiesDirectionArray(newDirection);
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
          <p>
            Also, define if more or less of this quality is something that is
            good for you. For example:
          </p>
          <div className="flexRowWrap greyBorder">
            <Image
              src="/../public/assets/screenshots/less-example.png"
              alt="Example of quality with direction"
              width="320"
              height="49"
              style={{
                margin: spacing.medium1,
              }}
            />
            <Image
              src="/../public/assets/screenshots/more-example.png"
              alt="Example of quality with direction"
              width="320"
              height="49"
              style={{
                margin: spacing.medium1,
                border: 1,
                borderColor: 'grey',
              }}
            />
          </div>

          <p style={{ textAlign: 'center' }}>
            You need to set at least three alternatives to get a result.
            <br />
            However, the more you set, the more solid your result will be.
          </p>
          <div className="bigInputWrap">
            <div id="helpButtonWrap">
              <InfoButton label="help" symbol="?" />
            </div>
          </div>

          {props.qualitiesInputFields.map((element, index) => {
            return (
              <div
                key={index}
                className={`inputWrap ${
                  index > 0 && !props.qualities[index - 1]
                    ? 'disabledInputWrap'
                    : ''
                }`}
              >
                <div
                  className={`switchWrap ${
                    index > 0 && !props.qualities[index - 1] && 'notClickable'
                  }`}
                >
                  <div
                    onClick={() => {
                      handleChangeOfQualityDirection(index, 'less');
                    }}
                    className={
                      props.qualitiesDirectionArray[index] === 'more'
                        ? 'inactiveSwitch'
                        : 'activeSwitch'
                    }
                  >
                    less
                  </div>
                  <div
                    onClick={() => {
                      handleChangeOfQualityDirection(index, 'more');
                    }}
                    className={
                      props.qualitiesDirectionArray[index] === 'less'
                        ? 'inactiveSwitch'
                        : 'activeSwitch'
                    }
                  >
                    more
                  </div>
                </div>
                <input
                  className="smallTextInput"
                  value={setQualitiesHelper[index]}
                  disabled={
                    index > 0 && !props.qualities[index - 1] ? true : false
                  }
                  onChange={(event) => {
                    handleChangeOfInputField(index, event);
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
            nextButton={true}
            nextButtonDisabled={props.qualities.length > 2 ? false : true}
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
