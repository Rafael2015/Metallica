let elementoImagem = document.querySelector('.banner img');
let banners = [
  'images/metallica1.jpg',
  'images/metallica2.png',
  'images/metallica3.jpg'
];

let bannerAtual = 0;

function trocarBanner() {
  // Soma 1 na variável bannerAtual
  bannerAtual++
  // bannerAtual = bannerAtual + 1;

  // banners.length == ao comprimento dos elementos contidos na variável banners
  if (bannerAtual == banners.length) {
    bannerAtual = 0;
  }

  let imagem = banners[bannerAtual];
  elementoImagem.src = imagem;
  console.log(`Conteúdo do array >>>> ${banners[bannerAtual]}`);
  console.log(elementoImagem.src);
}

// Coloca um intervalo de tempo ao executar a função repetidamente
setInterval(trocarBanner, 5000);
