import { useEffect, useState } from 'react';

export default function Statusbar(props) {
  const [statusInPercentage, setStatusInPercentage] = useState(0);

  useEffect(() => {
    setStatusInPercentage((100 * props.screen) / props.numberOfScreens);
    console.log('numberOfScreens in useEffect:', props.numberOfScreens);
  }, [props.screen]);

  const test = props.screen / props.numberOfScreens;
  return (
    <>
      <div id="statusBarWrap">
        <div id="statusBar" style={{ width: `${statusInPercentage}%` }}></div>
      </div>
    </>
  );
}
