class Complex {
    private real: number;
    private imaginary: number;

    constructor(real:number, imaginary:number) {
        this.real = real
        this.imaginary = imaginary;
    }

    toString() {
        console.log("RE: "+this.real+", IM: "+this.imaginary);
    }

    add(obj: Complex):Complex {
        return new Complex(this.real+obj.real,this.imaginary+obj.imaginary)
    }

    subtract(obj: Complex): Complex {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }

    modulo(): number{
        return Math.sqrt(Math.pow(this.real,2) + Math.pow(this.imaginary,2));
    }
}

let a = new Complex(2, 3);
let b = new Complex(5, 4);

let sumRes = a.add(b);
console.log(sumRes);

sumRes = sumRes.subtract(a);
console.log(sumRes);

console.log(sumRes.modulo());