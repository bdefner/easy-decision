import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

export default function Screen2(props: Props) {
  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2>What’s your question?</h2>
          <p>Formulate your question in a short sentence!</p>
          <div className="bigInputWrap">
            <div id="helpButtonWrap">
              <InfoButton label="help" symbol="?" />
            </div>

            <textarea
              value={props.question}
              className="bigTextInput"
              onChange={(event) => {
                props.setQuestion(event.currentTarget.value);
              }}
            ></textarea>
          </div>
          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={false}
          />
        </div>
        <div className="bottomInfoWrap">
          <p>For example:</p>{' '}
          <p>
            "In which field should I concentrate my studies?"{' '}
            <Link href="/">See more examples</Link>
          </p>{' '}
        </div>
      </section>
    </>
  );
}
