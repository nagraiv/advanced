
export default function orderByProps(obj ={}, sortArray = []) {
    if (!(sortArray instanceof Array)) {
        throw new Error('Array expected!');
    }
    // очищаем sortArray от возможных дубликатов и свойств, отсутствующих в исходном объекте
    const filteredArray = Array.from(new Set(sortArray))
        .filter(item => Object.keys(obj).includes(item));

    const firstPart = [];
    filteredArray.forEach(el => firstPart.push({
        key: el,
        value: obj[el],
    }));

    const secondPart = Object.entries(obj)
        .filter(item => !filteredArray.includes(item[0]))
        .sort((a, b) => a[0] < b[0] ? -1 : 1)
        .map(([key, value]) => { return { key, value } });

    return [...firstPart, ...secondPart];
}
