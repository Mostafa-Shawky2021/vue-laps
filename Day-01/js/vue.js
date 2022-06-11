let app = Vue.createApp({
    data() {
        return {
            isBookVisable: true,
            books: books,
            wishlist:[],
        }
    },
    methods: {
        addToWishList(book){
            this.wishlist.push(book);
        },
        isWished(book) {
            return this.wishlist.some(wbook => wbook.ISBN == book.ISBN) ;
        },
        removeBook(book) {
            this.wishlist.splice(this.wishlist.findIndex(wbook => wbook.ISBN == book.ISBN), 1);
        },
        formatCurrency(value) {
            return (new Intl.NumberFormat('ar-SA', { 
                style: 'currency', 
                currency: 'SAR', 
            }).format(value));
        },
        getTotalPrice() {
            let totalPrice = 0;
            this.wishlist.forEach(book => totalPrice += book.Price);
            return totalPrice;
        },
        toggleWichList() {
            this.isBookVisable = !this.isBookVisable;
            console.log(this.isBookVisable )
        }
    }
}).mount('#root');