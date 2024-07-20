//const olaMundo = "oi mundo"
//alert(olaMundo)

document.addEventListener('DOMContentLoaded',()=> {
    const contadorElemento =  document.getElementById('counter');
    const clickBotao = document.getElementById('clickBotao');

    let contador = 0
    clickBotao.addEventListener('click', ()=> {
        contador++
        contadorElemento.textContent = contador
    })
    //console.log(contadorElemento);
    //console.log(clickBotao);
})  