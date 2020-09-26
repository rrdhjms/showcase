import Difficulty from 'enums/Difficulty';

export const icon_purple = '#6C63FF';
export const easy = '#62B492';
export const medium = '#F48B00';
export const hard = '#F34A56';

export const getDifficulty = (level: Difficulty): string => {
  switch (level) {
    case Difficulty.Easy:
      return easy;
    case Difficulty.Medium:
      return medium;
    case Difficulty.Hard:
      return hard;
    default:
      return easy;
  }
};
