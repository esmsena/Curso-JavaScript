function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genêro = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       
        if (fsex[0].checked) {
            genêro = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'cebolinhabebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'cebolinhajovem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'cebolinhaadulto.webp')
            } else {
                //idoso
                img.setAttribute('src', 'cebolinhavelho.jpg')
            } 

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
                if (idade >= 0 && idade <10) {
                    //Criança
                    img.setAttribute('src', 'monicabebe.png')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'monicajovem.jpg')
                } else if (idade < 60) {
                    //adulto
                    img.setAttribute('src', 'monicaadulta.webp')
                } else {
                    //idoso
                    img.setAttribute('src', 'monicavelha.jpg')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}