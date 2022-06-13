window.onload = ()=>{
    const cep = document.querySelector('#inputCep');
    const buscar = document.querySelector('#buscar');

    buscar.addEventListener('click', ()=>{
        const opcoes = {
            rethod: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        fetch(`https://viacep.com.br/ws/${inputCep.value}/json`, opcoes)
        .then(
            response => { response.json()
                .then(data => {
                    //alert(data['localidade']);
                    document.querySelector('#cep').textContent = data['cep'];
                    document.querySelector('#logradouro').textContent = data['logradouro'];
                    document.querySelector('#bairro').textContent = data['bairro'];
                    document.querySelector('#cidade').textContent = data['localidade'];
                    document.querySelector('#estado').textContent = data['uf'];
                })
            }
        )
    });
}