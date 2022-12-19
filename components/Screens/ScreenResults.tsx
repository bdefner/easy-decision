import 'eazychart-css';
import {
  ColumnChart,
  PieChart,
  RadialChart,
  SemiCircleChart,
} from 'eazychart-react';
import { useState } from 'react';
import { colors, spacing } from '../../styles/styleConstants';
import CalculateResults from '../../utils/calculateResults';
import CompareSlider from '../CompareSlider';
import InfoButton from '../InfoButton';
import QueryNavigation from '../QueryNavigation';

// library for charts:

// https://www.npmjs.com/package/eazychart-react
// docs: https://docs.eazychart.com/?path=/story/6--default

function createChartDataObject(data, labels) {
  const chartData = [{}];

  data.map((item, index) => {
    chartData[index] = {
      id: `${index}`,
      name: ` ${labels[index]}  ( ${Math.round(100 * data[index])}% )`,
      v: 1,
      value: (data[index] * 100).toFixed(2),
    };
  });

  return chartData;
}

export default function ScreenResults(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const weightingQualities = props.weightingQualities.map((item: string) => {
    return parseInt(item);
  });

  const weightingComparison1 = props.weightingComparison1.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison2 = props.weightingComparison2.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison3 = props.weightingComparison3.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison4 = props.weightingComparison4.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison5 = props.weightingComparison5.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison6 = props.weightingComparison6.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison7 = props.weightingComparison7.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const result = CalculateResults(
    weightingQualities,
    props.qualities.length,
    props.alternatives.length,
    weightingComparison1,
    weightingComparison2,
    weightingComparison3,
    weightingComparison4,
    weightingComparison5,
    weightingComparison6,
    weightingComparison7,
  );

  console.log('result: ', result);

  const qualitiesChartData = createChartDataObject(
    result.qualitiesWeighting,
    props.qualities,
  );

  const comparisonsChartData = createChartDataObject(
    result.comparisonsWeighting,
    props.alternatives,
  );

  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2 style={{ textAlign: 'center', fontSize: 100 }}>Results</h2>

          <span
            style={{
              textAlign: 'center',
              color: colors.sand1,
              fontSize: 32,
              marginBottom: spacing.medium1,
            }}
          >
            {props.question}
          </span>
          <p>
            According to your answers, this is how strongly you tend to the
            alternatives:{' '}
          </p>
          <div className="chartWrap">
            <PieChart
              colors={['#26547c', '#ef476f', '#ffd166', '#06d6a0', '#06d6d1']}
              data={comparisonsChartData}
              domainKey="value"
              padding={{
                bottom: 100,
                left: 150,
                right: 150,
                top: 100,
              }}
            />
          </div>
          <br />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: spacing.small2,
            }}
          >
            <InfoButton label="pro tipp" symbol="!" />
            <p style={{ alignSelf: 'flex-start' }}>
              {' '}
              You can click on the labels to hide/show elements. 🖕🏻 This way,
              you can compare individual options against each other.
            </p>
          </div>
          <br />
          <br />
          <h3>Weighting of qualities</h3>
          <p>
            In terms of your question, this is how strongly you weighted your
            affected resources / qualities:{' '}
          </p>
          <div>
            <PieChart
              colors={['#26547c', '#ef476f', '#ffd166', '#06d6a0', '#06d6d1']}
              data={qualitiesChartData}
              domainKey="value"
              padding={{
                bottom: 100,
                left: 150,
                right: 150,
                top: 100,
              }}
            />
          </div>

          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
            nextButton={false}
          />
        </div>
      </section>
    </>
  );
}
