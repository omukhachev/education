function arraysSort(arr) {
    return arr.sort(arrayCompare).slice();
}

function arrayCompare(a, b) {
    return Math.max(...a) - Math.max(...b);
}

window.arraysSort = arraysSort;

export default arraysSort;

