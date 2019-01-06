export function orderOccurrences(names) {

    const itemCount = names.reduce((acum, curr, idx, arr) => {
        if (curr !== 'null' && curr.substring(0, 1) !== 'V')
            acum[curr] = acum[curr] + 1 || 1;
        return acum;
    }, {});

    const itemList = Object.keys(itemCount).map((key) => {
        return { key, value: itemCount[key] }
    });

    const orderedItemList = itemList.sort((a, b) => {
        return a.value < b.value ? 1 : a.value > b.value ? -1 : 0
    });

    const alphaOrderItemList = orderedItemList.sort((a, b) => {
        return a.value < b.value && a.key.substring(0, 1) < b.key.substring(0, 1) ? 1 :
            a.value > b.value && a.key.substring(0, 1) > b.key.substring(0, 1) ? -1 : 0;
    });

    return alphaOrderItemList.map((x) => `${x.key}=${x.value}`);
}
