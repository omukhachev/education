function arraysSort(arr) {
    return arr.sort(arrayCompare).slice();
}

function arrayCompare(a, b) {
    return Math.max.apply(null, a) - Math.max.apply(null, b);
}

window.arraysSort = arraysSort;

export default arraysSort;
