var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var reiniciar = document.querySelector("#reiniciar");

var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");

var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];

botaoLancarDado.addEventListener("click", function () {
  var dado = Math.floor(Math.random() * 6) + 1;
  if (dado == 1) {
    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = 0;
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual = 1 - jogadorAtual;
  } else {
    pontuacao[jogadorAtual] += dado;
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesRodadas[jogadorAtual].textContent = dado;
    if (pontuacao[jogadorAtual] == 100) {
      $("#modal").modal("show");
    }
  }
});

botaoPassarVez.addEventListener("click", function () {
  jogadorAtual = 1 - jogadorAtual;
});

botaoNovoJogo.addEventListener("click", novoJogo, false);

reiniciar.addEventListener("click", novoJogo, false);

function novoJogo() {
  pontuacao[jogadorAtual] = 0;
  pontuacao[1 - jogadorAtual] = 0;

  pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
  pontuacoesRodadas[1 - jogadorAtual].textContent = pontuacao[1 - jogadorAtual];

  pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
  pontuacoesGlobais[1 - jogadorAtual].textContent = pontuacao[1 - jogadorAtual];

  var sorteio = Math.floor(Math.random() * 2);
  if (sorteio == 0) {
    jogadorAtual = sorteio;
  } else {
    jogadorAtual = 1 - jogadorAtual;
  }
}
