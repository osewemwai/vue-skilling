const app = Vue.createApp({

    data () {
        return {
           number: 0,
        };
    },

    // watch for changes in value1 and value2 and reset them after 5 seconds
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000);
        }
        
    },

    // computed properties
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    },

        // methods to add 5 and 1
        methods: {
            addNumber(num) {
                this.number = this.number + num;
            }

    },
});

app.mount('#assignment');