import { colors } from '../styles/styleConstants';

export default function InfoButton(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 12,
          color: 'white',
          backgroundColor: colors.blue1,
          fontSize: 10,
          paddingRight: 5,
          marginBottom: 5,
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            color: colors.blue1,
            margin: 3,
            width: 10,
            height: 10,
            marginRight: 5,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 9, fontWeight: 600 }}>{props.symbol}</p>
        </div>{' '}
        <div></div>
        {props.label}
      </div>
    </>
  );
}
