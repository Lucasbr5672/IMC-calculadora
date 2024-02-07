function Soma (){
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")
    
    const Peso = Number(valor1.value)
    const Altura = Number(valor2.value)

   const soma = Peso + Altura

   document.getElementById("resultado").innerText = "Resultado: " + soma
}


