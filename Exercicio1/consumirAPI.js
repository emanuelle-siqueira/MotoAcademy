document.getElementById('buscar').addEventListener('click', function () {
    var cep = document.getElementById('cep').value;
    
    if (cep.length != 8 || isNaN(cep)) {
      alert('Por favor, digite um CEP válido com 8 números.');
      return;
    }
  
    var url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          document.getElementById('resultado').classList.remove('alert-info');
          document.getElementById('resultado').classList.add('alert-danger');
          document.getElementById('resultado').innerHTML = 'CEP não encontrado.';
          document.getElementById('resultado').classList.remove('d-none');
        } else {
          var endereco = `
            <strong>Endereço:</strong> ${data.logradouro}<br>
            <strong>Bairro:</strong> ${data.bairro}<br>
            <strong>Cidade:</strong> ${data.localidade}<br>
            <strong>Estado:</strong> ${data.uf}<br>
            <strong>CEP:</strong> ${data.cep}
          `;
          document.getElementById('resultado').classList.remove('alert-danger');
          document.getElementById('resultado').classList.add('alert-info');
          document.getElementById('resultado').innerHTML = endereco;
          document.getElementById('resultado').classList.remove('d-none');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar o CEP:', error);
        document.getElementById('resultado').classList.remove('alert-info');
        document.getElementById('resultado').classList.add('alert-danger');
        document.getElementById('resultado').innerHTML = 'Erro ao buscar o CEP. Por favor, tente novamente mais tarde.';
        document.getElementById('resultado').classList.remove('d-none');
      });
  });
  