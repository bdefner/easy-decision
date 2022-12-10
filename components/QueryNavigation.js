export default function QueryNavigation(props) {
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
            props.setScreen(props.screen + 1);
          }}
        >
          {'next >'}
        </div>
      </div>
    </>
  );
}
