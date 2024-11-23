export const GameDifficultCoefCalculate = (curValue: number, maxValue: number = 100, growthFactor: number = 50, linearCoeff: number = 0.5, roundTo: number = 2): number => {
  const RoundToDecimals = (value: number): number => {
    return Math.round(value * 10 ** roundTo) / 10 ** roundTo;
  };

  const normalizedExperience = curValue / maxValue;

  const difficultyCoefficient =
    1 + normalizedExperience * growthFactor + (Math.exp(growthFactor * normalizedExperience) - 1) * linearCoeff;

  return RoundToDecimals(difficultyCoefficient);
};