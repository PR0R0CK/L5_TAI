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
}

let a = new Complex(2, 3);
let b = new Complex(5, 4);

a.toString();
console.log(b.add(a));



