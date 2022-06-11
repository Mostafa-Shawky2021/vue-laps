let app = Vue.createApp({
    data: () => ({
        post: {
            title: '',
            category: '',
            desc:'',
            sendImmediately: false,
            shareon:[],
            edition: '',
        },
        postData: {
            categories: ['SWE', 'UI/UX', 'Development'],
            shareon: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Email'],
            editions: ['Standard', 'Premium', 'Platinum'],
        }
    }),
    methods: {

    },
    computed: {


    },
}).mount('#root');