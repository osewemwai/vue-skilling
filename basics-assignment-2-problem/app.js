const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      storedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("We got something new!");
    },
    storeInput() {
      this.storedInput = this.userInput;
    },
    resetInput() {
      this.userInput = "";
    }
  },
});

app.mount("#assignment");
