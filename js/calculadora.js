class Calculadora {
    constructor(){
        this.valor1 = document.getElementById("txtValor1");
        this.valor2 = document.getElementById("txtValor2");
        this.btnAdicao = document.getElementById("btnAdicao");
        this.btnSubtracao = document.getElementById("btnSubtracao");
        this.btnMultiplicacao = document.getElementById("btnMultiplicacao");
        this.btnDivisao = document.getElementById("btnDivisao");
        this.calcular();
    }

    calcular(){
        this.btnAdicao.onclick = event => this.somar();
        this.btnSubtracao.onclick = event => this.subtracao();
        this.btnMultiplicacao.onclick = event => this.multiplicacao();
        this.btnDivisao.onclick = event => this.divisao();
    }

    somar(){
       const resultado = parseFloat(this.valor1.value) + parseFloat(this.valor2.value);
       
       document.getElementById("lblResultado").innerHTML = `
       <label>${resultado}</label>
       `
    }

    subtracao(){
        const resultado = parseFloat(this.valor1.value) - parseFloat(this.valor2.value);

        document.getElementById("lblResultado").innerHTML = `
        <label>${resultado}</label>
        `
    }

    multiplicacao(){
        const resultado = parseFloat(this.valor1.value) * parseFloat(this.valor2.value);

        document.getElementById("lblResultado").innerHTML = `
        <label>${resultado}</label>
        `
    }

    divisao(){
        const resultado = parseFloat(this.valor1.value) / parseFloat(this.valor2.value);

        document.getElementById("lblResultado").innerHTML = `
        <label>${resultado}</label>
        `
    }
}
new Calculadora();

