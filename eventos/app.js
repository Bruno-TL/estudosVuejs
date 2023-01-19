new Vue({
    el:'#app',
    data:{
        valor:''
    },
    methods:{
        exibirAlert(){
            alert('Estou alertando agora');
        },
        alterar(event){
            this.valor = event.target.value;
        }   
    }

})