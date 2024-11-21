const axios = require('axios');

function viaCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url).then(response => {
        const data = response.data;
        if (data.erro) {
            console.log('CEP não encontrado');
        } else {
            console.log(data);
        }
    }).catch(error => {
        console.log('Erro ao buscar CEP');
    });
}

const cep = '03818030';
viaCep(cep);