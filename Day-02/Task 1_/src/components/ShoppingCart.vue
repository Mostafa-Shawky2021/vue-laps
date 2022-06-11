<template>
  <main id="root">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Books</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex align-items-baseline my-2 my-lg-0">
              <p class="px-2">
                {{ wishlist.length }}

                <span v-show="wishlist.length > 1">Books</span>
                <span v-show="wishlist.length == 1">Book</span>  with total Price {{ formatCurrency(getTotalPrice()) }}</p>

              <div class="btn btn-primary" v-on:click="toggleWichList()">
                Wished List
              </div>
            </div>
        </div>
      </nav>
      <div class="d-flex justify-content-between align-items-baseline container" v-if="isBookVisable">
        <div class="row">
          <div
            v-for="book in books"
            class="col-md-4"
            :class="[ book.NumberOfPages < 50 ? 'less' : 'more', ]"
            :key="book.id"
          >
            <div class="card">
              <img
                class="card-img-top"
                :src="book.Image"
                :alt="book.Name"
                :title="book.Name"
              >
              <div class="card-body">
                <h5 class="card-title">{{book.Name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{book.Author}}</h6>
                <div class="row">
                  <div class="col-md-12">
                    Category: {{book.Category}}
                  </div>
                  <div class="col-md-12">
                    #Pages: {{book.NumberOfPages}}
                  </div>
                  <div class="col-md-12">
                    Price: {{book.Price}}
                  </div>
                  <div class="col-md-12">
                    ISBN: {{book.ISBN}}
                  </div>
                </div>
                <button
                  class="btn btn-primary"
                  @click="addToWishList(book)"
                  :disabled="isWished(book)"
                >
                  Add To list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Err -->
      <span class="war"> </span>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="!isBookVisable && wishlist.length == 0"
      >
        You don't have any Books in the wish list
      </div>

      <!-- Cash -->
      <table class="table" v-if="!isBookVisable && wishlist.length != 0">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in wishlist" :key="book.ISBN">
            <td scope="col">{{book.ISBN}}</td>
            <td scope="col">{{book.Name}}</td>
            <td scope="col">{{book.Category}}</td>
            <td scope="col">{{book.Author}}</td>
            <td scope="col">{{ formatCurrency(book.Price) }}</td>
            <td>
              <div class="btn btn-danger" @click="removeBook(book)">Remove</div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">Total Price</td>
            <td colspan="2">{{ formatCurrency(getTotalPrice()) }}</td>
          </tr>
          <tr>
            <td colspan="4">Taxis</td>
            <td colspan="2">{{ formatCurrency(getTotalPrice() * 0.1) }}</td>
          </tr>
          <tr>
            <td colspan="4">Grand Total </td>
            <td colspan="2">{{ formatCurrency(getTotalPrice() * 1.1) }}</td>
          </tr>
        </tfoot>
      </table>
    </main>
</template>

<script>
import books from "../books";

export default {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .link {
      color: orange;
      text-decoration: none;
  }

  .card {
      margin-bottom: 5px;
  }

  #navbarSupportedContent > div{
      color: #FFF;
      margin: auto;
  }
</style>