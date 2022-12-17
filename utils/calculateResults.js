import { Matrix } from 'ml-matrix';

function CreateWeightingVector(array, length) {
  // Return array, depending on length
  const vector = [];
  switch (length) {
    case 3:
      vector[0] = array[0]; // C1
      vector[1] = array[1]; // C2
      vector[2] = array[6]; // C7
      break;

    case 4:
      vector[0] = array[0]; // C1
      vector[1] = array[1]; // C2
      vector[2] = array[6]; // C7
      vector[3] = array[2]; // C3
      vector[4] = array[7]; // C8
      vector[5] = array[11]; // C12
      break;

    case 5:
      vector[0] = array[0]; // C1
      vector[1] = array[1]; // C2
      vector[2] = array[6]; // C7
      vector[3] = array[2]; // C3
      vector[4] = array[7]; // C8
      vector[5] = array[11]; // C12
      vector[6] = array[3]; // C4
      vector[7] = array[8]; // C9
      vector[8] = array[12]; // C13
      vector[9] = array[15]; // C16
      break;

    case 6:
      vector[0] = array[0]; // C1
      vector[1] = array[1]; // C2
      vector[2] = array[6]; // C7
      vector[3] = array[2]; // C3
      vector[4] = array[7]; // C8
      vector[5] = array[11]; // C12
      vector[6] = array[3]; // C4
      vector[7] = array[8]; // C9
      vector[8] = array[12]; // C13
      vector[9] = array[15]; // C16
      vector[10] = array[4]; // C5
      vector[11] = array[9]; // C10
      vector[12] = array[13]; // C14
      vector[13] = array[16]; // C17
      vector[14] = array[18]; // C19
      break;

    case 7:
      vector[0] = array[0]; // C1
      vector[1] = array[1]; // C2
      vector[2] = array[6]; // C7
      vector[3] = array[2]; // C3
      vector[4] = array[7]; // C8
      vector[5] = array[11]; // C12
      vector[6] = array[3]; // C4
      vector[7] = array[8]; // C9
      vector[8] = array[12]; // C13
      vector[9] = array[15]; // C16
      vector[10] = array[4]; // C5
      vector[11] = array[9]; // C10
      vector[12] = array[13]; // C14
      vector[13] = array[16]; // C17
      vector[14] = array[18]; // C19
      vector[15] = array[5]; // C6
      vector[16] = array[10]; // C11
      vector[17] = array[14]; // C15
      vector[18] = array[17]; // C18
      vector[19] = array[19]; // C20
      vector[20] = array[20]; // C21
      break;

    default:
      0;
      break;
  }

  return vector;
}

function createVectorOfZeros(length) {
  const vector = [];

  for (let i = 0; i < length; i++) {
    vector.push(0);
  }

  return vector;
}

export function Eigenvector(matrix, length) {
  // Create Eigenvector

  const eigenvector = createVectorOfZeros(length);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      eigenvector[i] += matrix.data[i][j];
    }
  }

  // Calculate vector sum

  let vectorSum = 0;

  for (let i = 0; i < length; i++) {
    vectorSum += eigenvector[i];
  }

  // Normalize Eigenvector

  for (let i = 0; i < length; i++) {
    eigenvector[i] = eigenvector[i].toFixed(2) / vectorSum.toFixed(2);
  }

  // Return normalized Eigenvector

  return eigenvector;
}

function rightSwitch(value) {
  if (value === 0) {
    return 0;
  } else {
    return Math.abs(value < 1 ? -1 * value : 1 / value);
  }
}

function leftSwitch(value) {
  if (value === 0) {
    return 0;
  } else return Math.abs(value > 1 ? value : -1 / value);
}

export function ArrayToMatrix(array, length) {
  // Generate Matrix

  let matrixA;

  switch (length) {
    case 3:
      matrixA = new Matrix([
        [1, rightSwitch(array[0]), rightSwitch(array[1])],
        [leftSwitch(array[0]), 1, rightSwitch(array[6])],
        [leftSwitch(array[1]), leftSwitch(array[6]), 1],
      ]);
      break;

    case 4:
      matrixA = new Matrix([
        [
          1,
          rightSwitch(array[0]),
          rightSwitch(array[1]),
          rightSwitch(array[2]),
        ],
        [leftSwitch(array[0]), 1, rightSwitch(array[6]), rightSwitch(array[7])],
        [leftSwitch(array[1]), leftSwitch(array[6]), 1, rightSwitch(array[11])],
        [leftSwitch(array[2]), leftSwitch(array[7]), leftSwitch(array[11]), 1],
      ]);

      break;

    case 5:
      matrixA = new Matrix([
        [
          1,
          rightSwitch(array[0]),
          rightSwitch(array[1]),
          rightSwitch(array[2]),
          rightSwitch(array[3]),
        ],
        [
          leftSwitch(array[0]),
          1,
          rightSwitch(array[6]),
          rightSwitch(array[7]),
          rightSwitch(array[8]),
        ],
        [
          leftSwitch(array[1]),
          leftSwitch(array[6]),
          1,
          rightSwitch(array[11]),
          rightSwitch(array[12]),
        ],
        [
          leftSwitch(array[2]),
          leftSwitch(array[7]),
          leftSwitch(array[11]),
          1,
          rightSwitch(array[15]),
        ],

        [
          leftSwitch(array[3]),
          leftSwitch(array[8]),
          leftSwitch(array[12]),
          leftSwitch(array[15]),
          1,
        ],
      ]);

      break;

    case 6:
      matrixA = new Matrix([
        [
          1,
          rightSwitch(array[0]),
          rightSwitch(array[1]),
          rightSwitch(array[2]),
          rightSwitch(array[3]),
          rightSwitch(array[4]),
        ],
        [
          leftSwitch(array[0]),
          1,
          rightSwitch(array[6]),
          rightSwitch(array[7]),
          rightSwitch(array[8]),
          rightSwitch(array[9]),
        ],
        [
          leftSwitch(array[1]),
          leftSwitch(array[6]),
          1,
          rightSwitch(array[11]),
          rightSwitch(array[12]),
          rightSwitch(array[13]),
        ],
        [
          leftSwitch(array[2]),
          leftSwitch(array[7]),
          leftSwitch(array[11]),
          1,
          rightSwitch(array[15]),
          rightSwitch(array[16]),
        ],

        [
          leftSwitch(array[3]),
          leftSwitch(array[8]),
          leftSwitch(array[12]),
          leftSwitch(array[15]),
          1,
          rightSwitch(array[18]),
        ],
        [
          leftSwitch(array[4]),
          leftSwitch(array[9]),
          leftSwitch(array[13]),
          leftSwitch(array[16]),
          leftSwitch(array[18]),
          1,
        ],
      ]);

      break;

    case 7:
      matrixA = new Matrix([
        [
          1,
          rightSwitch(array[0]),
          rightSwitch(array[1]),
          rightSwitch(array[2]),
          rightSwitch(array[3]),
          rightSwitch(array[4]),
          rightSwitch(array[5]),
        ],
        [
          leftSwitch(array[0]),
          1,
          rightSwitch(array[6]),
          rightSwitch(array[7]),
          rightSwitch(array[8]),
          rightSwitch(array[9]),
          rightSwitch(array[10]),
        ],
        [
          leftSwitch(array[1]),
          leftSwitch(array[6]),
          1,
          rightSwitch(array[11]),
          rightSwitch(array[12]),
          rightSwitch(array[13]),
          rightSwitch(array[14]),
        ],
        [
          leftSwitch(array[2]),
          leftSwitch(array[7]),
          leftSwitch(array[11]),
          1,
          rightSwitch(array[15]),
          rightSwitch(array[16]),
          rightSwitch(array[17]),
        ],

        [
          leftSwitch(array[3]),
          leftSwitch(array[8]),
          leftSwitch(array[12]),
          leftSwitch(array[15]),
          1,
          rightSwitch(array[18]),
          rightSwitch(array[19]),
        ],
        [
          leftSwitch(array[4]),
          leftSwitch(array[9]),
          leftSwitch(array[13]),
          leftSwitch(array[16]),
          leftSwitch(array[18]),
          1,
          rightSwitch(array[20]),
        ],
        [
          leftSwitch(array[5]),
          leftSwitch(array[10]),
          leftSwitch(array[14]),
          leftSwitch(array[17]),
          leftSwitch(array[19]),
          leftSwitch(array[20]),
          1,
        ],
      ]);

      break;

    default:
      matrixA = [];
      break;
  }

  return matrixA;
  // Return Matrix
}

function MutiplyMatrixByItselfInThreeIterations(matrix) {
  const MMulMatrixIteration1 = matrix.mmul(matrix);
  const MMulMatrixIteration2 = MMulMatrixIteration1.mmul(MMulMatrixIteration1);
  const MMulMatrixIteration3 = MMulMatrixIteration2.mmul(MMulMatrixIteration2);

  return MMulMatrixIteration3;
}

function MultiplyVectorByValue(array, value) {
  return array.map((item) => item * value);
}

function generateComparisonsWeighting(
  C1Q1,
  C2Q2,
  C3Q3,
  C4Q4,
  C5Q5,
  C6Q6,
  C7Q7,
  alternativesLength,
  qualitiesLength,
) {
  const comparisonsWeighting = [];

  switch (qualitiesLength) {
    case 2:
      for (let i = 0; i < alternativesLength; i++) {
        comparisonsWeighting[i] = C1Q1[i] + C2Q2[i];
      }
      break;

    case 3:
      for (let i = 0; i < alternativesLength; i++) {
        comparisonsWeighting[i] = C1Q1[i] + C2Q2[i] + C3Q3[i];
      }
      break;

    case 4:
      console.log('C3Q3:', C3Q3);
      console.log('C4Q4:', C4Q4);
      for (let i = 0; i < alternativesLength; i++) {
        comparisonsWeighting[i] = C1Q1[i] + C2Q2[i] + C3Q3[i] + C4Q4[i];
      }
      break;

    case 5:
      for (let i = 0; i < alternativesLength; i++) {
        comparisonsWeighting[i] =
          C1Q1[i] + C2Q2[i] + C3Q3[i] + C4Q4[i] + C5Q5[i];
      }
      break;

    case 6:
      for (let i = 0; i < alternativesLength; i++) {
        comparisonsWeighting[i] =
          C1Q1[i] + C2Q2[i] + C3Q3[i] + C4Q4[i] + C5Q5[i] + C6Q6[i];
      }
      break;

    case 7:
      for (let i = 0; i < alternativesLength; i++) {
        comparisonsWeighting[i] =
          C1Q1[i] + C2Q2[i] + C3Q3[i] + C4Q4[i] + C5Q5[i] + C6Q6[i] + C7Q7[i];
      }
      break;

    default:
      comparisonsWeighting[0] = 0;
      break;
  }
  return comparisonsWeighting;
}

export default function CalculateResults(
  qualitiesWeighting,
  qualitiesLength,
  alternativesLength,
  weightingComparison1,
  weightingComparison2,
  weightingComparison3,
  weightingComparison4,
  weightingComparison5,
  weightingComparison6,
  weightingComparison7,
) {
  const qualitiesMatrix = ArrayToMatrix(qualitiesWeighting, qualitiesLength);

  console.log('alternativesLength: ', alternativesLength);
  console.log('weightingComparison1: ', weightingComparison1);
  console.log('weightingComparison2: ', weightingComparison2);
  console.log('weightingComparison3: ', weightingComparison3);
  console.log('weightingComparison4: ', weightingComparison4);
  console.log('weightingComparison5: ', weightingComparison5);
  console.log('weightingComparison6: ', weightingComparison6);
  console.log('weightingComparison7: ', weightingComparison7);

  const comparison1Matrix =
    weightingComparison1 &&
    ArrayToMatrix(weightingComparison1, alternativesLength);

  const comparison2Matrix =
    weightingComparison2 &&
    ArrayToMatrix(weightingComparison2, alternativesLength);

  const comparison3Matrix =
    weightingComparison3 &&
    ArrayToMatrix(weightingComparison3, alternativesLength);

  const comparison4Matrix =
    weightingComparison4 &&
    ArrayToMatrix(weightingComparison4, alternativesLength);

  const comparison5Matrix =
    weightingComparison5 &&
    ArrayToMatrix(weightingComparison5, alternativesLength);

  const comparison6Matrix =
    weightingComparison6 &&
    ArrayToMatrix(weightingComparison6, alternativesLength);

  const comparison7Matrix =
    weightingComparison7 &&
    ArrayToMatrix(weightingComparison7, alternativesLength);

  const qualitiesMatrixTransformed =
    MutiplyMatrixByItselfInThreeIterations(qualitiesMatrix);

  const eigenvectorOfQualitiesMatrix = Eigenvector(
    qualitiesMatrixTransformed,
    qualitiesLength,
  );

  const comparison1Transformed =
    weightingComparison1 &&
    MutiplyMatrixByItselfInThreeIterations(comparison1Matrix);

  const comparison2Transformed =
    weightingComparison2 &&
    MutiplyMatrixByItselfInThreeIterations(comparison2Matrix);

  const comparison3Transformed =
    weightingComparison3 &&
    MutiplyMatrixByItselfInThreeIterations(comparison3Matrix);

  const comparison4Transformed =
    weightingComparison4 &&
    MutiplyMatrixByItselfInThreeIterations(comparison4Matrix);

  const comparison5Transformed =
    weightingComparison5 &&
    MutiplyMatrixByItselfInThreeIterations(comparison5Matrix);

  const comparison6Transformed =
    weightingComparison6 &&
    MutiplyMatrixByItselfInThreeIterations(comparison6Matrix);

  const comparison7Transformed =
    weightingComparison7 &&
    MutiplyMatrixByItselfInThreeIterations(comparison7Matrix);

  const eigenvectorOfComparison1 =
    weightingComparison1 &&
    Eigenvector(comparison1Transformed, alternativesLength);

  const eigenvectorOfComparison2 = Eigenvector(
    comparison2Transformed,
    alternativesLength,
  );

  const eigenvectorOfComparison3 =
    weightingComparison3 &&
    Eigenvector(comparison3Transformed, alternativesLength);

  const eigenvectorOfComparison4 =
    weightingComparison4 &&
    Eigenvector(comparison4Transformed, alternativesLength);

  const eigenvectorOfComparison5 =
    weightingComparison5 &&
    Eigenvector(comparison5Transformed, alternativesLength);

  const eigenvectorOfComparison6 =
    weightingComparison6 &&
    Eigenvector(comparison6Transformed, alternativesLength);

  const eigenvectorOfComparison7 =
    weightingComparison7 &&
    Eigenvector(comparison7Transformed, alternativesLength);

  const MultiplicationOfC1AndQW =
    weightingComparison2 &&
    eigenvectorOfComparison1.map((item, index) => {
      return item * eigenvectorOfQualitiesMatrix[0];
    });

  // const MultiplicationOfC2AndQW = eigenvectorOfComparison2.map(
  //   (item, index) => {
  //     return item * eigenvectorOfQualitiesMatrix[0];
  //   },
  // );

  // const MultiplicationOfC3AndQW = eigenvectorOfComparison3.map(
  //   (item, index) => {
  //     return item * eigenvectorOfQualitiesMatrix[0];
  //   },
  // );

  // const MultiplicationOfC4AndQW = eigenvectorOfComparison4.map(
  //   (item, index) => {
  //     return item * eigenvectorOfQualitiesMatrix[0];
  //   },
  // );

  // const MultiplicationOfC5AndQW = eigenvectorOfComparison5.map(
  //   (item, index) => {
  //     return item * eigenvectorOfQualitiesMatrix[0];
  //   },
  // );

  // const MultiplicationOfC6AndQW = eigenvectorOfComparison6.map(
  //   (item, index) => {
  //     return item * eigenvectorOfQualitiesMatrix[0];
  //   },
  // );

  // const MultiplicationOfC7AndQW = eigenvectorOfComparison7.map(
  //   (item, index) => {
  //     return item * eigenvectorOfQualitiesMatrix[0];
  //   },
  // );

  const results = {};

  console.log('comparison1Matrix: ', comparison1Matrix);
  console.log('comparison2Matrix: ', comparison2Matrix);
  console.log('comparison3Matrix: ', comparison3Matrix);
  console.log('comparison4Matrix: ', comparison4Matrix);
  console.log('comparison5Matrix: ', comparison5Matrix);
  console.log('comparison6Matrix: ', comparison6Matrix);
  console.log('comparison7Matrix: ', comparison7Matrix);
  console.log('eigenvectorOfQualitiesMatrix: ', eigenvectorOfQualitiesMatrix);
  console.log('eigenvectorOfComparison1: ', eigenvectorOfComparison1);
  console.log('eigenvectorOfComparison2: ', eigenvectorOfComparison2);
  console.log('eigenvectorOfComparison3: ', eigenvectorOfComparison3);
  console.log('eigenvectorOfComparison4: ', eigenvectorOfComparison4);
  console.log('eigenvectorOfComparison5: ', eigenvectorOfComparison5);
  console.log('eigenvectorOfComparison6: ', eigenvectorOfComparison6);
  console.log('eigenvectorOfComparison7: ', eigenvectorOfComparison7);

  // MultiplyVectorByValue

  const C1Q1 = [];
  const C2Q2 = [];
  const C3Q3 = [];
  const C4Q4 = [];
  const C5Q5 = [];
  const C6Q6 = [];
  const C7Q7 = [];

  if (eigenvectorOfComparison1[0] && eigenvectorOfQualitiesMatrix[0]) {
    console.log('eigenvectorOfComparison1: ', eigenvectorOfComparison1);
    console.log(
      'eigenvectorOfQualitiesMatrix[0]: ',
      eigenvectorOfQualitiesMatrix[0],
    );
    for (let i = 0; i < eigenvectorOfComparison1.length; i++) {
      C1Q1[i] = eigenvectorOfComparison1[i] * eigenvectorOfQualitiesMatrix[0];
    }
    console.log('C1QW1:', C1Q1);
  }

  if (eigenvectorOfComparison2[0] && eigenvectorOfQualitiesMatrix[1]) {
    for (let i = 0; i < eigenvectorOfComparison2.length; i++) {
      C2Q2[i] = eigenvectorOfComparison2[i] * eigenvectorOfQualitiesMatrix[1];
    }
    console.log('C2QW2:', C2Q2);
  }

  if (eigenvectorOfComparison3[0] && eigenvectorOfQualitiesMatrix[2]) {
    for (let i = 0; i < eigenvectorOfComparison3.length; i++) {
      C3Q3[i] = eigenvectorOfComparison3[i] * eigenvectorOfQualitiesMatrix[2];
    }
    console.log('C3QW3:', C3Q3);
  }

  if (eigenvectorOfComparison4[0] && eigenvectorOfQualitiesMatrix[3]) {
    for (let i = 0; i < eigenvectorOfComparison4.length; i++) {
      C4Q4[i] = eigenvectorOfComparison4[i] * eigenvectorOfQualitiesMatrix[3];
    }
    console.log('C4QW4:', C4Q4);
  }

  if (eigenvectorOfComparison5[0] && eigenvectorOfQualitiesMatrix[4]) {
    for (let i = 0; i < eigenvectorOfComparison5.length; i++) {
      C5Q5[i] = eigenvectorOfComparison5[i] * eigenvectorOfQualitiesMatrix[4];
    }
    console.log('C5QW5:', C5Q5);
  }

  if (eigenvectorOfComparison6[0] && eigenvectorOfQualitiesMatrix[5]) {
    for (let i = 0; i < eigenvectorOfComparison6.length; i++) {
      C6Q6[i] = eigenvectorOfComparison6[i] * eigenvectorOfQualitiesMatrix[5];
    }
    console.log('C6QW6:', C6Q6);
  }

  if (eigenvectorOfComparison7[0] && eigenvectorOfQualitiesMatrix[6]) {
    for (let i = 0; i < eigenvectorOfComparison7.length; i++) {
      C7Q7[i] = eigenvectorOfComparison7[i] * eigenvectorOfQualitiesMatrix[6];
    }
    console.log('C7QW7:', C7Q7);
  }

  results.comparisonsWeighting = generateComparisonsWeighting(
    C1Q1,
    C2Q2,
    C3Q3,
    C4Q4,
    C5Q5,
    C6Q6,
    C7Q7,
    alternativesLength,
    qualitiesLength,
  );

  console.log('results.comparisonsWeighting: ', results.comparisonsWeighting);
  results.qualitiesWeighting = eigenvectorOfQualitiesMatrix;

  return results;
}
