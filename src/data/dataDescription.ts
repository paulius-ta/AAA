import {Description} from '@customTypes/model/apiTypes.ts';
import attributeColors from '@styles/attributeColors.ts';

const generateRandomId = () => {
  const minLength = 2;
  const maxLength = 8;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

const getRandomType = () => {
  return attributeColors[
    Math.round(Math.random() * (attributeColors.length - 1))
  ];
};

export const dataDescription: Description = {
  id: 90137109120,
  origin: ['mixed', 'unknown'],
  number: 4,
  condition: 'good',
  dimensions: [400, 600, 200],
  attributes: Array(10)
    .fill(undefined)
    .map(() => ({id: generateRandomId(), type: getRandomType()})),
};
