const minSwapTwo = (arr) => {

    let counter = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (!(arr[i] === (i + 1))) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
            counter++;
            i--;
        }
    }

    return counter;

};

export default minSwapTwo;
