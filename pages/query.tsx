import Head from 'next/head';
import { useEffect, useState } from 'react';
import Screen1 from '../components/Screens/Screen1';
import Screen10 from '../components/Screens/Screen10';
import Screen11 from '../components/Screens/Screen11';
import Screen12 from '../components/Screens/Screen12';
import Screen13 from '../components/Screens/Screen13';
import Screen14 from '../components/Screens/Screen14';
import Screen2 from '../components/Screens/Screen2';
import Screen3 from '../components/Screens/Screen3';
import Screen4 from '../components/Screens/Screen4';
import Screen5 from '../components/Screens/Screen5';
import Screen6 from '../components/Screens/Screen6';
import Screen7 from '../components/Screens/Screen7';
import Screen8 from '../components/Screens/Screen8';
import Screen9 from '../components/Screens/Screen9';
import ScreenResults from '../components/Screens/ScreenResults';

export default function Query(props: Props) {
  const [question, setQuestion] = useState('');
  const [alternativesInputFields, setAlternativesInputFields] = useState([
    '',
    '',
    '',
  ]);
  const [qualitiesInputFields, setQualitiesInputFields] = useState([
    '',
    '',
    '',
  ]);
  const [qualities, setQualities] = useState([]);
  const [qualitiesDirectionArray, setQualitiesDirectionArray] = useState([
    `more`,
    `more`,
    `more`,
    `more`,
    `more`,
    `more`,
    `more`,
  ]);
  const [alternatives, setAlternatives] = useState([]);
  const [weightingQualities, setWeightingQualities] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison1, setWeightingComparison1] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison2, setWeightingComparison2] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison3, setWeightingComparison3] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison4, setWeightingComparison4] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison5, setWeightingComparison5] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison6, setWeightingComparison6] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [weightingComparison7, setWeightingComparison7] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.screen]);

  function renderSwitch(screen: number) {
    switch (screen) {
      case 1:
        return <Screen1 screen={props.screen} setScreen={props.setScreen} />;

      case 2:
        return (
          <Screen2
            screen={props.screen}
            setScreen={props.setScreen}
            question={question}
            setQuestion={setQuestion}
          />
        );

      case 3:
        return (
          <Screen3
            screen={props.screen}
            setScreen={props.setScreen}
            alternatives={alternatives}
            setAlternatives={setAlternatives}
            alternativesInputFields={alternativesInputFields}
            setAlternativesInputFields={setAlternativesInputFields}
          />
        );

      case 4:
        return (
          <Screen4
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            setQualities={setQualities}
            qualitiesDirectionArray={qualitiesDirectionArray}
            setQualitiesDirectionArray={setQualitiesDirectionArray}
            qualitiesInputFields={qualitiesInputFields}
            setQualitiesInputFields={setQualitiesInputFields}
          />
        );
      case 5:
        props.setNumberOfScreens(5 + qualities.length * alternatives.length);
        props.setIsQueryActive(true);
        return <Screen5 screen={props.screen} setScreen={props.setScreen} />;
      case 6:
        return <Screen6 screen={props.screen} setScreen={props.setScreen} />;
      case 7:
        return (
          <Screen7
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            weighting={weightingQualities}
            setWeighting={setWeightingQualities}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 8:
        return (
          <Screen8
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison1}
            setWeighting={setWeightingComparison1}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 9:
        return (
          <Screen9
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison2}
            setWeighting={setWeightingComparison2}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 10:
        return (
          <Screen10
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison3}
            setWeighting={setWeightingComparison3}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 11:
        return (
          <Screen11
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison4}
            setWeighting={setWeightingComparison4}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 12:
        return (
          <Screen12
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison5}
            setWeighting={setWeightingComparison5}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 13:
        return (
          <Screen13
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison6}
            setWeighting={setWeightingComparison6}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 14:
        return (
          <Screen14
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            alternatives={alternatives}
            weighting={weightingComparison7}
            setWeighting={setWeightingComparison7}
            qualitiesDirectionArray={qualitiesDirectionArray}
          />
        );

      case 15:
        return (
          <ScreenResults
            screen={props.screen}
            setScreen={props.setScreen}
            question={question}
            qualities={qualities}
            alternatives={alternatives}
            weightingQualities={weightingQualities}
            weightingComparison1={weightingComparison1}
            weightingComparison2={weightingComparison2}
            weightingComparison3={weightingComparison3}
            weightingComparison4={weightingComparison4}
            weightingComparison5={weightingComparison5}
            weightingComparison6={weightingComparison6}
            weightingComparison7={weightingComparison7}
            qualitiesDirectionArray={qualitiesDirectionArray}

            // Dummy data to test and confirm results:

            // weightingQualities={[
            //   4, -2, 7, 7, 4, 2, 7, 2, 4, 4, 1, 4, 4, 4, 1, 1, 1, -4, 1, 1, 1,
            // ]}
            // weightingComparison1={[
            //   1, 1, 5, 6, 1, 1, 4, 4, 3, 1, 1, 5, 4, 1, -2, -1, -4, -4, -2, -4,
            //   1,
            // ]}
            // weightingComparison2={[
            //   1, -2, -9, -9, 5, -8, -5, -9, -9, 1, 5, -9, -9, 4, 4, 1, 9, 9, 9,
            //   9, 1,
            // ]}
            // weightingComparison3={[
            //   1, 9, 1, 1, 3, 5, 7, 3, 3, 9, 9, -7, -3, 1, 2, 1, 8, 8, 8, 8, -1,
            // ]}
            // weightingComparison4={[
            //   3, -6, -9, -6, 1, -4, -6, -8, -5, 1, -5, -5, 1, 4, 1, 5, 5, 3, 1,
            //   -1, -3,
            // ]}
            // weightingComparison5={[
            //   5, -7, -7, -6, -4, -3, -6, -7, -5, -4, -4, -6, -3, -2, -2, 3, 3,
            //   1, 1, 1,
            // ]}
            // weightingComparison6={[
            //   2, 1, -5, 3, -3, -5, 1, -4, -4, -5, 1, -1, 1, 5, 3, 1, -2, -2, -1,
            // ]}
            // weightingComparison7={[
            //   5, 14, 20, 9, 7, 9, 13, 17, 4, -3, 9, 17, 2, -4, 7, -2, -9, -11,
            //   -12, -2, 1,
            // ]}
          />
        );

      default:
        return (
          <>
            <p>This should not happen...</p>
            <button
              onClick={() => {
                props.setScreen(1);
              }}
            >
              reset screen
            </button>
          </>
        );
    }
  }

  return (
    <>
      <Head>
        <title>New Query</title>
        <meta name="description" content="Testing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="queryScreenWrap">{renderSwitch(props.screen)}</section>
    </>
  );
}
