Vue.component('list-item', {
    template: '<li v-bind:title="item.nome" v-on:click="showName()" v-bind:tdi="id"> {{ item.name}}</li>',
    props:[ 'item','id'],
    methods: {
        showName: function() {
            alert(this.id + " - " + this.item.name);
        }
    }
})

app = new Vue({
    el: "#app",
    data: {
        animais:[
            {id:1, name:'Dog'},
            {id:2, name:'Cat'},
            {id:3, name:'Bird'},
            {id:4, name:'Fish'},
        ]
    }
});