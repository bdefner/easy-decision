import { colors, spacing } from '../../styles/styleConstants';
import CompareSlider from '../CompareSlider';
import QueryNavigation from '../QueryNavigation';

export default function Screen10(props: Props) {
  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2 style={{ textAlign: 'center' }}>
            What has a stronger, positive influence in terms of{' '}
            <br />
            <span
              style={{
                color: colors.sand1,
                padding: spacing.small1,
                lineHeight: 2,
                backgroundColor: colors.lightGrey,
                borderRadius: spacing.border,
              }}
            >
              {props.qualities[2]}
            </span>
          </h2>

          <CompareSlider
            a={props.alternatives[0] === '' ? false : props.alternatives[0]}
            b={props.alternatives[1] === '' ? false : props.alternatives[1]}
            index={0}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[0] === '' ? false : props.alternatives[0]}
            b={props.alternatives[2] === '' ? false : props.alternatives[2]}
            index={1}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[0] === '' ? false : props.alternatives[0]}
            b={props.alternatives[3] === '' ? false : props.alternatives[3]}
            index={2}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[0] === '' ? false : props.alternatives[0]}
            b={props.alternatives[4] === '' ? false : props.alternatives[4]}
            index={3}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[0] === '' ? false : props.alternatives[0]}
            b={props.alternatives[5] === '' ? false : props.alternatives[5]}
            index={4}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[0] === '' ? false : props.alternatives[0]}
            b={props.alternatives[6] === '' ? false : props.alternatives[6]}
            index={5}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[1] === '' ? false : props.alternatives[1]}
            b={props.alternatives[2] === '' ? false : props.alternatives[2]}
            index={6}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[1] === '' ? false : props.alternatives[1]}
            b={props.alternatives[3] === '' ? false : props.alternatives[3]}
            index={7}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[1] === '' ? false : props.alternatives[1]}
            b={props.alternatives[4] === '' ? false : props.alternatives[4]}
            index={8}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[1] === '' ? false : props.alternatives[1]}
            b={props.alternatives[5] === '' ? false : props.alternatives[5]}
            index={9}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[1] === '' ? false : props.alternatives[1]}
            b={props.alternatives[6] === '' ? false : props.alternatives[6]}
            index={10}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[2] === '' ? false : props.alternatives[2]}
            b={props.alternatives[3] === '' ? false : props.alternatives[3]}
            index={11}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[2] === '' ? false : props.alternatives[2]}
            b={props.alternatives[4] === '' ? false : props.alternatives[4]}
            index={12}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[2] === '' ? false : props.alternatives[2]}
            b={props.alternatives[5] === '' ? false : props.alternatives[5]}
            index={13}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[2] === '' ? false : props.alternatives[2]}
            b={props.alternatives[6] === '' ? false : props.alternatives[6]}
            index={14}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[3] === '' ? false : props.alternatives[3]}
            b={props.alternatives[4] === '' ? false : props.alternatives[4]}
            index={15}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[3] === '' ? false : props.alternatives[3]}
            b={props.alternatives[5] === '' ? false : props.alternatives[5]}
            index={16}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[3] === '' ? false : props.alternatives[3]}
            b={props.alternatives[6] === '' ? false : props.alternatives[6]}
            index={17}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[4] === '' ? false : props.alternatives[4]}
            b={props.alternatives[5] === '' ? false : props.alternatives[5]}
            index={18}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[4] === '' ? false : props.alternatives[4]}
            b={props.alternatives[6] === '' ? false : props.alternatives[6]}
            index={19}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />
          <CompareSlider
            a={props.alternatives[5] === '' ? false : props.alternatives[5]}
            b={props.alternatives[6] === '' ? false : props.alternatives[6]}
            index={20}
            weighting={props.weighting}
            setWeighting={props.setWeighting}
          />

          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
            nextButton={true}
          />
        </div>
      </section>
    </>
  );
}
