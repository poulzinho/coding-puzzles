const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        const searched = target - numbers[i];
        const found = numbers.findIndex((x) => x === searched);
        if (found !== -1) return [i, found];
    }
};

export default twoSum;
