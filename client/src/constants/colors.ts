import difficulty from 'enums/difficulty';

export const icon_purple = '#6C63FF';
export const easy = '#62B492';
export const medium = '#F48B00';
export const hard = '#F34A56';

export const getDifficulty = (level: difficulty): string => {
  switch (level) {
    case difficulty.Easy:
      return easy;
    case difficulty.Medium:
      return medium;
    case difficulty.Hard:
      return hard;
    default:
      return easy;
  }
};
