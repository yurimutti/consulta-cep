// Aguarda Submit
document.querySelector('#cepForm').addEventListener('submit', getCepInfo);

function getCepInfo(e) {
  // Pega valor do cep do input
  const cep = document.querySelector('.cep').value;

  // Faz a request
  fetch(`//viacep.com.br/ws/${cep}/json`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    // Exibe informação do CEP
    let infoCep = "";
    if(data.erro) {
    infoCep += `
    <div class="alertError">
    <img src="assets/img/error.svg" alt="Fechar" id="fechar">
    <p>Cep inexistente.</p>
    </div>
    `;
   } else {
    infoCep += `
    <div class="alertCep">
    <img src="assets/img/close.svg" alt="Fechar" id="fechar">
    <h2>Endereço</h2>
    <p>CEP:<span>${data.cep}</span></p>
    <p>Logradouro:<span>${data.logradouro}</span></p>
    <p>Complemento:<span>${data.complemento}</span></p>
    <p>Bairro:<span>${data.bairro}</span></p>
    <p>Uf:<span>${data.uf}</span></p>
  </div>
    `
   }
    // Insere a template no DOM
  document.querySelector("#infoCep").innerHTML = infoCep;
  let el = document.getElementById('fechar');
    if(el){
    el.addEventListener('click', close);
    function close () {
      document.getElementById("infoCep").style.display = 'none';
      window.location.reload();
    }
    }
});

e.preventDefault();

}

$(document).ready(function(){
	//CEP
  $("#cep").mask("99999-999");
  
});






