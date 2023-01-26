new Vue({
    el:'#app',
    data: {
        contador:0,
        contador2: 0,
    },
    computed: {
        resultado(){
            console.log('metodo computed chamado')
            return this.contador + this.contador2
        }
    },
    methods: {
        aumentar() {
            this.contador++
        },
        diminuir(){
            this.contador--
        }
    }
}) 