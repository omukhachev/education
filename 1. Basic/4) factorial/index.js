function factorial(n) {

    if (1 === n) {
        return n;
    }
    return n * factorial(n - 1);

}

window.factorial = factorial;

export default factorial;
