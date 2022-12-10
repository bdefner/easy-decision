import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

export default function Screen3(props: Props) {
  const [inputArray, setInputArray] = useState(['', '', '']);

  function addInputField() {
    if (inputArray.length < 5) {
      setInputArray([...inputArray, '']);
    }
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

          {inputArray.map((element) => {
            return <input className="smallTextInput" />;
          })}
          {inputArray.length < 5 && (
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
