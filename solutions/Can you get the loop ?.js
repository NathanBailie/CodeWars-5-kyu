// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

function loop_size(node) {
    let tortoise = node.getNext();
    let rabbit = node.getNext().getNext();

    while (tortoise !== rabbit) {
        tortoise = tortoise.getNext();
        rabbit = rabbit.getNext().getNext();
    }

    let count = 1;
    rabbit = rabbit.getNext();

    while (rabbit !== tortoise) {
        rabbit = rabbit.getNext();
        count++;
    }

    return count;
}