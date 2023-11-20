const { createApp } = Vue;

createApp({
    data() {
        return {
            userMails: Array.from({ length: 10 }, () => ({
                user: "User Email",
                generatedEmail: ""
            }))
        };
    },
    methods: {
        generateEmails() {
            this.userMails.forEach((mail, index) => {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    this.userMails[index].generatedEmail = resp.data.response;
                });
            });
        }
    },
    mounted() {
        this.generateEmails();
    }
}).mount('#app');
