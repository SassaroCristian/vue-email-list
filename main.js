const { createApp } = Vue;

createApp({
    data() {
        return {
            userMails: Array.from({ length: 10 }, () => ({
                user: "User Email",
                generatedEmail: ""
            })),
            showEmails: false
        };
    },
    methods: {
        generateEmails() {
            this.userMails.forEach((mail, index) => {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    this.userMails[index].generatedEmail = resp.data.response;
                });
            });
        },
        toggleEmailsVisibility() {
            this.showEmails = !this.showEmails;
        }
    },
    mounted() {
        this.generateEmails();
    }
}).mount('#app');
