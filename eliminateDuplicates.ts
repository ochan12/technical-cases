const getMbMemory = () => (process.memoryUsage().rss / 1024 / 1024) * 100;

function eliminateDuplicates(arrayOfNumbers: number[]) {
  const deduplicated: number[] = [];
  arrayOfNumbers.forEach((number) => {
    if (deduplicated.indexOf(number) < 0) {
      deduplicated.push(number);
    }
  });
  return deduplicated;
}

function eliminateDuplicatesSet(arrayOfNumbers: number[]) {
  const deduplicated: number[] = Array.from(new Set(arrayOfNumbers).values());
  return deduplicated;
}

function eliminateDuplicatesReduce(arrayOfNumbers: number[]) {
  const deduplicated: number[] = Array.from(
    arrayOfNumbers.reduce((acc, value) => acc.add(value), new Set<number>())
  );
  return deduplicated;
}

function eliminateDuplicatesObject(arrayOfNumbers: number[]) {
  const deduplicated: number[] = [];
  const deduplicatedMap: number[] = [];

  arrayOfNumbers.forEach((number) => {
    if (!deduplicatedMap[number]) {
      deduplicatedMap[number] = number;
      deduplicated.push(number);
    }
  });
  return deduplicated;
}

const array = [
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
  ...Array(5000000).keys(),
].map(() => Math.ceil(Math.random() * 10000));
console.log(array);

// eliminateDuplicates(array);
eliminateDuplicatesSet(array);
eliminateDuplicatesReduce(array);
eliminateDuplicatesObject(array);
