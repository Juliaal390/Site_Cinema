# Site para Cinema
(Em progresso)

Projeto fictício de criação de um site para cinema. Não foi feito protótipo, o objetivo desse site é testar e aplicar meus conhecimentos em front-end na medida em que eu aprendo. Por conta disso, as atualizações podem ser constantes
# Visualização

<p>
  
  Você pode visualizar o site clicando [aqui](https://site-cinema-sandy.vercel.app/)

# Tecnologias usadas

<p align="center">
 
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5"> <br>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"> <br>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> <br>
</p>

# Desafios
#### Barra de menu sumindo ao redimensionar tela
  Criei um menu burguer para dispositivos de menor resolução, mas quando eu redimensionava a tela, clicava no  botão, e aumentava a tela novamente, a barra de menu para desktop sumia. Eu estava usando .style.display pra alterar o display do botão e deixá-lo visível ou não.
  Para solucionar, troquei o .style.display para .classList.add/.classList.remove, manipulando uma classe chamada .show-menu (com propriedades que tornam o botão visível), tornando o código mais reaproveitável. Também usei window.innerWidth, propriedade que retorna o tamanho da tela. Se a tela fosse maior que 660px, a classe .show-menu era removida, tornando invisível o menu burguer e retornando a barra de menu normal automaticamente ao redimensionar a tela para desktop.

# Responsividade
<p>Projeto feito para se adequar à dispositivos móveis e desktop</p>
