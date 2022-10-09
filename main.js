const app = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
