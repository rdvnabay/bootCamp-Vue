const app = Vue.createApp({
    data() {
        return {
            user: {
                name: "Rıdvan", age: 28
            },
            image_url: "https://res.cloudinary.com/practicaldev/image/fetch/s--wJ0gYHgm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/d440mmj72v2vi7ad76ir.png",
            seo_keyword: "vue-js-egitim-kablosuzkedi"
        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
}).mount('#exercise')