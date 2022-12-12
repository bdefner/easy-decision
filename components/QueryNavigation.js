import { useEffect } from 'react';

function handleClickOnNext(dataForFetch, screen, setScreen) {
  console.log('dataForFetch: ', dataForFetch);
  setScreen(screen + 1);
}

export default function QueryNavigation(props) {
  const dataForFetch = {
    question: props.question,
  };

  return (
    <>
      <div className="queryNavWrap">
        {props.backButton && (
          <div
            className="mainButton button2"
            onClick={() => {
              props.setScreen(props.screen - 1);
            }}
          >
            {'< back'}
          </div>
        )}
        <div
          className="mainButton button1"
          onClick={() => {
            handleClickOnNext(dataForFetch, props.screen, props.setScreen);
          }}
        >
          {'next >'}
        </div>
      </div>
    </>
  );
}
