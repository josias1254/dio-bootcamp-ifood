/*

    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José
    para dizer o valor de seu IMC

      IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    IMC() {
       return this.peso / Math.pow(this.altura, 2);
    }
    ClassificarIMC () {
        const imc = this.IMC();
        if (imc < 18.5){
            return 'Abaixo do peso';
        }else if (imc >= 18.5 && imc <= 25){
            return 'Peso normal';
        }else if (imc > 25 && imc <= 30 ){
            return 'Acima do peso';
        }else if (imc > 30 && imc <= 40){
            return 'Obeso';
        }else {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('jose',80,1.75);
console.log(jose.IMC(), jose.ClassificarIMC());