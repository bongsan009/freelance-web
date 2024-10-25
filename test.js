const list = [50, 40, 30, 20, 10];

function sumElems(list, i = 0) {
    if (i == list.length - 1) {
        return list[i];
    } else {
        return list[i] + sumElems(list, i + 1)
    }
}

console.log(sumElems(list))
