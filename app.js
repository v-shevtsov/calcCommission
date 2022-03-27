// The main file for project
import { readFromFile } from './src/utils/index.js';

function calcCommission() {
  const nodePath = process.argv[2] ?? 'input.json';
  const inputFileJSON = readFromFile(nodePath);
  const inputFile = JSON.parse(inputFileJSON);
  const amountArray = inputFile.map(({ operation }) => operation.amount);
  console.log(amountArray);
}

calcCommission();
