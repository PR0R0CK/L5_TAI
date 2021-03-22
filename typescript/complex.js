var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.toString = function () {
        console.log("RE: " + this.real + ", IM: " + this.imaginary);
    };
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.modulo = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    return Complex;
}());
var a = new Complex(2, 3);
var b = new Complex(5, 4);
var sumRes = a.add(b);
console.log(sumRes);
sumRes = sumRes.subtract(a);
console.log(sumRes);
console.log(sumRes.modulo());
