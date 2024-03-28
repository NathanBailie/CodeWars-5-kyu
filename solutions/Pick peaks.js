// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

function pickPeaks(arr) {
    let pos = [], peaks = [], ind = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[i] > arr[i - 1] && (ind = i);
        (arr[i] < arr[i - 1] && ind) && (pos.push(ind), peaks.push(arr[ind]), ind = 0);
    }
    return { pos, peaks };
}