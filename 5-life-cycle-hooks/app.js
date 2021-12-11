const app = Vue.createApp({
    data() {
        return {
            title: "Test Başlığı",
            itemList: []
        }
    },

    beforeCreate() {
        console.log("beforeCreate çalıştı.")
    },
    created() {
        console.log("created çalıştı")
        setTimeout(() => {
            this.itemList = [1, 2, 3, 4, 5, 6, 7, 8]
        }, 200);

        setTimeout(() => {
            this.title="Bu yeni başlık"
        }, 3000);
    },
    beforeMount(){
        console.log("beforeMount çalıştı")
    },
    mounted(){
        console.log("mounted çalıştı")
    },
    beforeUpdate(){
        console.log("beforeUpdate çalıştı")
    },
    updated(){
        console.log("updated çalıştı")
    },
    beforeUnmount(){
        console.log("before unmounted çalıştı")
    },
    unmounted(){
        console.log("unmounted çalıştı")
    }
})
app.mount("#app")
setTimeout(() => {
    app.unmount()
}, 5000);