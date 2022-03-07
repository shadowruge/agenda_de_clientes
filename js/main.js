const btn = document.querySelector("#send")

btn.addEventListener('click', function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value
    const sobre_nome = document.getElementById("sobre_nome").value
    const tel = document.getElementById("tel").value
    const email = document.getElementById("email").value
    const endereco = document.getElementById("endereco").value
    const cep = document.getElementById("cep").value
    const numero = document.getElementById("numero").value
    const produto = document.getElementById("produto").value
    const marca = document.getElementById("marca").value
    const valor = document.getElementById("valor").value

    let dados={
        "Nome":nome,
        "sobre nome":sobre_nome,
        "Tel":tel,
        "Email":email,
        "Endereço":endereco,
        "Cep":cep,
        "Numero":numero,
        "Produto":produto,
        "Marca":marca,
        "Valor":valor,
    }

    console.log(dados)

    
    const includeTheDOM =`
    <span>
        <label for="">Cliente</label><br>
        <hr>
        Nome: ${nome}<br>
        Sobre nome: ${sobre_nome}<br>
        Tel: ${tel}<br>
        Email: ${email}<br>
        Endereço: ${endereco}<br>
        Cep: ${cep}<br>
        Numero: ${numero}<br>
        Produto: ${produto}<br>
        Marca: ${marca}<br>
        Valor: ${valor}<br>
        <hr>
    </span>
    `    
view.innerHTML += includeTheDOM        


        })