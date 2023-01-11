import { colors, spacing } from '../styles/styleConstants';

export default function CompareSlider(props) {
  function handleInputChange(index, event) {
    const newInput = [...props.weighting];
    newInput[index] = event.target.value;
    props.setWeighting(newInput);
  }

  return (
    <div className={(!props.a || !props.b) && 'hidden'}>
      <div className="sliderComparisonWrap">
        <div>
          {props.aDirection && (
            <p
              style={{
                textAlign: 'right',
                fontSize: 15,
                color: colors.sand1,
              }}
            >
              {props.aDirection}
            </p>
          )}
          <p style={{ textAlign: 'right' }}>{props.a}</p>
        </div>
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
        <div>
          {props.bDirection && (
            <p
              style={{
                fontSize: 15,
                color: colors.sand1,
              }}
            >
              {props.bDirection}
            </p>
          )}
          <p>{props.b}</p>
        </div>
      </div>
    </div>
  );
}
