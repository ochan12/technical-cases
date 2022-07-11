const isValidNextNumber = (
  a: number,
  b: number,
  ascendent: boolean,
  numberGap = 1
) => {
  return (
    (ascendent === true && b === a + numberGap) ||
    (ascendent === false && b === a - numberGap)
  );
};

const getMbMemory = () =>
  ((process.memoryUsage().rss / 1024 / 1024) * 100) / 100;

const shouldArrayChange = (
  currentRange: number[],
  currentLongestRange: number[],
  mustHaveNumber?: number
) =>
  (!mustHaveNumber ||
    (mustHaveNumber && currentRange.indexOf(mustHaveNumber) >= 0)) &&
  currentRange.length > currentLongestRange.length;

export const findLongestConsecutiveRange = (
  numberArray: number[],
  numberGap = 1,
  mustHaveNumber?: number
) => {
  let currentDescIndex: number = 0;
  let currentAscIndex: number = 0;
  let longestRange: number[] = [];
  let longestRangeIndex: number = 0;
  let currentAscRange: number[] = [];
  let currentDescRange: number[] = [];

  numberArray.forEach((currentNumber, index) => {
    if (
      isValidNextNumber(
        currentDescRange[currentDescRange.length - 1],
        currentNumber,
        false,
        numberGap
      )
    ) {
      currentDescRange.push(currentNumber);
    } else {
      if (shouldArrayChange(currentDescRange, longestRange, mustHaveNumber)) {
        longestRangeIndex = currentDescIndex;
        longestRange = currentDescRange;
      }
      currentDescRange = [currentNumber];
      currentDescIndex = index;
    }

    if (
      isValidNextNumber(
        currentAscRange[currentAscRange.length - 1],
        currentNumber,
        true,
        numberGap
      )
    ) {
      currentAscRange.push(currentNumber);
    } else {
      if (shouldArrayChange(currentAscRange, longestRange, mustHaveNumber)) {
        longestRangeIndex = currentAscIndex;
        longestRange = currentAscRange;
      }
      currentAscRange = [currentNumber];
      currentAscIndex = index;
    }
  });

  if (shouldArrayChange(currentDescRange, longestRange, mustHaveNumber)) {
    longestRangeIndex = currentDescIndex;
    longestRange = currentDescRange;
  }

  if (shouldArrayChange(currentAscRange, longestRange, mustHaveNumber)) {
    longestRangeIndex = currentAscIndex;
    longestRange = currentAscRange;
  }

  return [longestRangeIndex, longestRange.length];
};


findLongestConsecutiveRange([1, 2, 3, -10, -9, -8, -7, 0, 1, 2], undefined, 1);
