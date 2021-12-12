const app = Vue.createApp({
    data() {
        return {
            value: "",
            value2: ""
        }
    },
    methods: {
        showAlert() {
            alert("alert gösterildi")
        },
        keyDownEvent(e) {
            this.value = e.target.value
        },
        keyDownEvent2(e) {
            this.value2 = e.target.value
        }
    }
}).mount('#exercise')