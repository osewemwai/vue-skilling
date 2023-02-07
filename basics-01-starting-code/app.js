const app = Vue.createApp({
    data: function() {
        return {
            courseGoalA: `Finish the course and some more!`,
            courseGoalB: `Master Vue and build amazing apps!`,
            vuelink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    } // or data() {}
});

app.mount('#user-goal');
