const app=Vue.createApp({
    data(){
        return{
            fullName:"Rıdvan Abay"
        }
    },
    methods:{
        updateValue(event){
            this.fullName=event.target.value
        }
    }
}).mount('#app')