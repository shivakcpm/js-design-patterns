class SpecialMath {
    constructor(num) {
        this._num = num;
    }

    square() {
        return this._num ** 2;
    }

    cube() {
        return this._num ** 3;
    }

    squareRoot() {
        return Math.sqrt(this._num);
    }
}
