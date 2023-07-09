import { DataStorage } from '../classes/Storage';
import { storageAnswers } from './answers';
import { clearInputValue } from './clear-input';
import { printTimeOut } from './print-correct-answer';

const startCharNumber = 0;

export function getHint(): void {
  const currentLevel = DataStorage.getValue('level');
  const numLevel = Number(currentLevel) - 1;
  const correctAnswer = storageAnswers[numLevel];

  clearInputValue();
  printTimeOut(correctAnswer, startCharNumber);
}
