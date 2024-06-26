// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(target) {
    let [prev, curr] = [0, 1];
    while (prev * curr < target) [prev, curr] = [curr, prev + curr];
    return [prev, curr, prev * curr === target];
}