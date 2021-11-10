Vue.createApp({
    data: () => ({
        myHtml: '<h1>Todo</h1>',
        items: []
    }),
    methods: {
        addItem() {
            if (this.$refs.myInput.value != '') {

                this.items.unshift(this.$refs.myInput.value)
                this.$refs.myInput.value = ''
            } else {
                return
            }
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount("#app")