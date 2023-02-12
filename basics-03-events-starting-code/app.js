const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm(){
      alert('Submitted!');
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
  }
});

app.mount('#events');
