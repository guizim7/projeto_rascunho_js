var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função multiplicar
  multiplicar();

});


//Função multiplicar
function  multiplicar() {
  
  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);
  
  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
  
  //Realiza a multiplicação do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_multiplicação" recebe o valor da multiplicação
  let resultado_multiplicacao = primeiro_numero_inteiro * segundo_numero_inteiro;

  //Aqui vai escrever no input "resultado_multiplicação" o valor que está armazenado na variável "resultado_multiplicação"
  document.getElementById("resultado_multiplicacao").value = resultado_multiplicacao;
  
  
}
