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

function NormalizeVector(vector) {
  // Return normalized Vector
}

export function Eigenvector(matrix) {
  // Create Eigenvector
  // Normalize Eigenvector
  // Return normalized Eigenvector
}

function rightSwitch(value) {
  return value < 1 ? -1 * value : 1 / value;
}

function leftSwitch(value) {
  return value > 1 ? value : -1 / value;
}

export function ArrayToMatrix(array, length) {

  console.log('#2');
  // Turn weighting array into vector
  const vector = CreateWeightingVector(array, length);
  // Generate Matrix

  console.log('array.length:', array.length);

  let matrixA;

  switch (length) {
    case 3:
      matrixA = new Matrix([
        [1, rightSwitch(array[0]), rightSwitch(array[1])],
        [leftSwitch(array[0]), 1, rightSwitch(array[6])],
        [leftSwitch(array[1]), leftSwitch(array[6]), 1],
      ]);
      break;
    default:
      matrixA = [];
      break;
  }

  return matrixA;
  // Return Matrix
}
