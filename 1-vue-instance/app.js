const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp 1.gün",
            content: "Lorem ipsum dolar sit ament...",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuzkedi-vue-bootcamp"
            },
            owner: "RdvanAbay",
            coords: {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle
        },
        updateCoords(message,event){
            this.changeTitle(`${event.x},${event.y}`)
            this.coords={
                x:event.x,
                y:event.y
            }
        }
    }
}).mount("#app")