import promptSync from "prompt-sync";
const prompt = promptSync();

class Calculadora
{
    private x: number;
    private y: number;
    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }
    //metodos
    suma():number
    {
        let suma= this.x + this.y;
        return suma;
    }
    resta():number
    {
        let resta = this.x - this.y;
        return resta;
    }
    multiplicacion():number
    {
        let multiplicacion = this.x * this.y;
        return multiplicacion;
    }
    division():number
    {
        if (this.y == 0)
        {
            return console.error("Error: Division por 0") as unknown as number;
            ;
        }
        let division = this.x / this.y;
        return division;
    }
}


function main():void
{
    console.log("---Calculadora---");
    const x = parseFloat(prompt("Ingrese el primer numero: "));
    const operacion = prompt("Ingrese la operacion (+,-,*,/): ");
    const y = parseFloat(prompt("Ingrese el segundo numero: "));

    const calculadora = new Calculadora(x,y);

    try 
    {
        switch(operacion)
        {
            case "+":
                console.log(`El resultado de la suma es: ${calculadora.suma()}`);
                break;
            case "-":
                console.log(`El resultado de la resta es: ${calculadora.resta()}`);
                break;
            case "*":
                console.log(`El resultado de la multiplicacion es: ${calculadora.multiplicacion()}`);
                break;
            case "/":
                console.log(`El resultado de la division es: ${calculadora.division()}`);
                break;
        }
} catch (error)
{
    console.log("Error: " + error);
}  
}

main();