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
    return Complex;
}());
var a = new Complex(2, 3);
var b = new Complex(5, 4);
a.toString();
console.log(b.add(a));
