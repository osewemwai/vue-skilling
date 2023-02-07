const app = Vue.createApp({
  data: function () {
    return {
      name: "Master Ngatulika",
      age: 99,
      image:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    };
  },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment");
