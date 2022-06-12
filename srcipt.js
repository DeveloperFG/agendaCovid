var txt = document.getElementById('msg')
res = document.getElementById('msg') 
var pag = document.getElementById('pag')
pag.style.color = '#fff'

function carregar(){
var nome1 = window.prompt('qual seu nome?')  
while( nome1 === "" || nome1 === null ){
    alert('preencha os campos!!')
    var nome1 = window.prompt('qual seu nome?')  
} 
    res.innerHTML = `Olá, ${nome1}`
}
    


    


function cadastrar(){

    alert('Preencha os campos');

    var nome = prompt('Digite seu nome');
    var idade = prompt('Digite sua idade');
    var comorbidade = prompt('Você tem alguma comorbidade? sim ou nao?')
    var tiposdecomorbidade = ('')
    var div1 = document.getElementById('div1')
    

    if(comorbidade == 'sim') {
     tiposdecomorbidade= prompt ('Qual a sua comorbidade?');
    
    } if(tiposdecomorbidade == 'Diabetes' && 'Pressão alta'){

    alert('Cadastro relizado com sucesso');
    


    } else if(tiposdecomorbidade != 'Diabetes' &&  tiposdecomorbidade != 'Pressão alta'){
            alert('Você não se enquadra na lista prioritária');
            alert('Aguerde seu dia, Obrigado!!!');
            

    
     } else if(comorbidade == 'não'){
    alert('Aguarde até chegar sua idade, para se vacinar');

    }if(comorbidade == 'não'){
    alert('Aguarde até chegar sua idade, para se vacinar');
     }
   


}
