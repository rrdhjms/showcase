import { easy, medium, hard } from './colors';
import difficulty from 'enums/difficulty';

export const easyShield = `https://img.shields.io/badge/-Easy-${easy.substring(
  1
)}?style=flat-square&logoColor=white`;

export const mediumShield = `https://img.shields.io/badge/-Medium-${medium.substring(
  1
)}?style=flat-square&logoColor=white`;

export const hardShield = `https://img.shields.io/badge/-${hard.substring(
  1
)}-F34A56?style=flat-square&logoColor=white`;

export const elixirShield =
  'https://img.shields.io/badge/-Elixir-4B275F?style=flat-square&logo=elixir&logoColor=white';

export const getDifficulty = (level: difficulty): string => {
  switch (level) {
    case difficulty.Easy:
      return easyShield;
    case difficulty.Medium:
      return mediumShield;
    case difficulty.Hard:
      return hardShield;
    default:
      return easyShield;
  }
};

export const getLanguage = (language: string): string => {
  switch (language.toLowerCase()) {
    case 'elixir':
      return elixirShield;
    default:
      return elixirShield;
  }
};
