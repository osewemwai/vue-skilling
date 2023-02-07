const app = Vue.createApp({
    data: function() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vuelink: 'https://vuejs.org/'
        };
    } // or data() {}
});

app.mount('#user-goal');
