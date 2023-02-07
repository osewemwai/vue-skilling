const app = Vue.createApp({
    data: function() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
        };
    } // or data() {}
});

app.mount('#user-goal');
