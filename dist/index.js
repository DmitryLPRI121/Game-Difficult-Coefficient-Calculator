"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDifficultCoefCalculate = void 0;
const GameDifficultCoefCalculate = (curValue, maxValue = 100, growthFactor = 50, linearCoeff = 0.5, roundTo = 2) => {
    const RoundToDecimals = (value) => {
        return Math.round(value * 10 ** roundTo) / 10 ** roundTo;
    };
    const normalizedExperience = curValue / maxValue;
    const difficultyCoefficient = 1 + normalizedExperience * growthFactor + (Math.exp(growthFactor * normalizedExperience) - 1) * linearCoeff;
    return RoundToDecimals(difficultyCoefficient);
};
exports.GameDifficultCoefCalculate = GameDifficultCoefCalculate;
