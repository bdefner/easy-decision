import { EigenvalueDecomposition, Matrix } from 'ml-matrix';
import { useState } from 'react';
import { colors, spacing } from '../../styles/styleConstants';
import CalculateResults from '../../utils/calculateResults';
import CompareSlider from '../CompareSlider';
import QueryNavigation from '../QueryNavigation';

// library for charts:

// https://www.npmjs.com/package/eazychart-react
// docs: https://docs.eazychart.com/?path=/story/6--default

export default function ScreenResults(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const weightingQualities = props.weightingQualities.map((item: string) => {
    return parseInt(item);
  });
  const weightingComparison1 = props.weightingComparison1.map(
    (item: string) => {
      parseInt(item);
    },
  );

  const result = CalculateResults(weightingQualities, props.qualities.length);

  console.log('result: ', result);

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
