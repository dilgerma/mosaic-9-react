<template>
    <ul>
      <li v-for="article in articles" :key=article.id>
        <div class="product row">
          <div class="col-xs-4"><img width="200px" :src="article.image"></div>  
          <div class="col-xs-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>  
          <div class="col-xs-2"><a @click="addToCart(article)">Hinzufügen</a></div>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Articles',
  props: ['eev'],
  methods: {
    addToCart(article){
      this.eev.emit('add-cart-item', {
              'name': article.name,
              'price': article.price
            })
    }
  },
  data:function(){
    return {articles: [
      {
        "id":"1",
        "name": "Javascript - the good parts",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
        "price":"5.99"
      },
      {
        "id":"2",
        "name": "Pro Typescript",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/51A-BmJ-qUL._SX404_BO1,204,203,200_.jpg",
        "price":"25.99"
      },
      {
        "id":"3",
        "name": "Pro React",
        "image" : "http://www.pro-react.com/images/book.jpg",
        "price":"99.99"
      }
    ]
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.product {
  background-color: #cccccc;
  color:white;
  padding: 25px
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  list-style: none;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
