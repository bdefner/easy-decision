export default function CompareSlider(props) {
  function handleInputChange(index, event) {
    const newInput = [...props.weighting];
    newInput[index] = event.target.value;
    props.setWeighting(newInput);
  }

  return (
    <div className={(!props.a || !props.b) && 'hidden'}>
      <div className="sliderComparisonWrap">
        <p style={{ textAlign: 'right' }}>{props.a}</p>
        <input
          type={'range'}
          min="-10"
          max="10"
          className="slider"
          value={props.weighting[props.index]}
          onChange={(event) => {
            handleInputChange(props.index, event);
          }}
        />
        <p>{props.b}</p>
      </div>
    </div>
  );
}
