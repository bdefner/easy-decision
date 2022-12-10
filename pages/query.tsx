import Head from 'next/head';
import { useEffect, useState } from 'react';
import Screen1 from '../components/Screens/Screen1';
import Screen2 from '../components/Screens/Screen2';
import Screen3 from '../components/Screens/Screen3';
import Screen4 from '../components/Screens/Screen4';
import Screen5 from '../components/Screens/Screen5';
import Screen6 from '../components/Screens/Screen6';
import Screen7 from '../components/Screens/Screen7';
import Statusbar from '../components/Statusbar';

export default function Query(props: Props) {
  const [qualities, setQualities] = useState(['']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.screen]);

  function renderSwitch(screen: number) {
    switch (screen) {
      case 1:
        return <Screen1 screen={props.screen} setScreen={props.setScreen} />;

      case 2:
        return <Screen2 screen={props.screen} setScreen={props.setScreen} />;

      case 3:
        return <Screen3 screen={props.screen} setScreen={props.setScreen} />;

      case 4:
        return (
          <Screen4
            screen={props.screen}
            setScreen={props.setScreen}
            qualities={qualities}
            setQualities={setQualities}
          />
        );
      case 5:
        return <Screen5 screen={props.screen} setScreen={props.setScreen} />;
      case 6:
        return <Screen6 screen={props.screen} setScreen={props.setScreen} />;
      case 7:
        return <Screen7 screen={props.screen} setScreen={props.setScreen} />;
      default:
        return (
          <>
            <p>This should not happen...</p>
          </>
        );
    }
  }

  props.setIsQueryActive(true);
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
