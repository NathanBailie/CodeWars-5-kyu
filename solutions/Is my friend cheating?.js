// https://www.codewars.com/kata/5547cc7dcad755e480000004

function removeNb(n) {
    const sum = n * (n + 1) / 2;
    let res = [];

    for (let a = 1; a <= n; a++) {
        let b = (sum - a) / (a + 1);
        if (b <= n && Number.isInteger(b)) res.push([a, b]);
    }

    return res;
}