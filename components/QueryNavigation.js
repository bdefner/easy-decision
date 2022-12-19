import { useEffect } from 'react';

function handleClickOnNext(dataForFetch, screen, setScreen) {
  setScreen(screen + 1);
}

export default function QueryNavigation(props) {
  console.log('props.nextButtonDisabled: ', props.nextButtonDisabled);
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
        {props.nextButton && (
          <div className={props.nextButtonDisabled ? 'disabledButton' : ''}>
            <div
              className="mainButton button1"
              onClick={() => {
                !props.nextButtonDisabled &&
                  handleClickOnNext(
                    dataForFetch,
                    props.screen,
                    props.setScreen,
                  );
              }}
            >
              {'next >'}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
