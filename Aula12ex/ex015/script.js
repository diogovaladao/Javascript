function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
                //  testaIdade(genero)
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'masculino-crianca.png')
            } else if (idade >= 12 && idade < 18) {
                // adolescente
                img.setAttribute('src', 'adolescente-homem.png')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'jovem-homem.png')
            } else {
                //velho
                img.setAttribute('src', 'homem-velho.png')
            }
        } else {
            genero = 'Mulher'
                //testaIdade(genero)
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'feminino-crianca.png')
            } else if (idade >= 12 && idade < 18) {
                // adolescente
                img.setAttribute('src', 'adolescente-mulher.png')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'jovem-mulher.png')
            } else {
                //velho
                img.setAttribute('src', 'mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

/*function testaIdade(sexo){
    if (idade >= 0 && idade < 12) {
        //criança
        if (sexo =='Masculino'){
            img.setAttribute('src', 'masculino-crianca.png')
        } else {
            img.setAttribute('src', 'feminino-crianca.png')
        }
    } else if (idade >= 12 && idade < 18) {
        // adolescente
        if (sexo =='Masculino'){
            img.setAttribute('src', 'adolescente-homem.png')
        } else {
            img.setAttribute('src', 'adolescente-mulher.png')
        }
    } else if (idade >= 18 && idade < 50) {
        //adulto
        if (sexo =='Masculino'){
            img.setAttribute('src', 'jovem-homem.png')
        } else {
          img.setAttribute('src', 'jovem-mulher.png')  
        }
    } else {
        //velho
        if (sexo =='Masculino'){
            img.setAttribute('src', 'homem-velho.png')
        } else {
             img.setAttribute('src', 'mulher-velha.png')
        }
        
       
    }
}*/