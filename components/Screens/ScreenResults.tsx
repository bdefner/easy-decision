import { colors, spacing } from '../../styles/styleConstants';
import CompareSlider from '../CompareSlider';
import QueryNavigation from '../QueryNavigation';

// library for charts:

// https://www.npmjs.com/package/eazychart-react
// docs: https://docs.eazychart.com/?path=/story/6--default

export default function ScreenResults(props: Props) {
  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2 style={{ textAlign: 'center' }}>Results</h2>

          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
          />
        </div>
      </section>
    </>
  );
}
