<template>
  <div>
    <ul>
      <li v-for="article in articles" :key=article.id>
    
        <a href="">{{article.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    msg: String
  },
  data:function(){
    return {articles: [
      {
        "id":"1",
        "name": "JS Deep Dive",
        "price":"5.99"
      },
      {
        "id":"2",
        "name": "JS - the Good Parts",
        "price":"25.99"
      },
      {
        "id":"3",
        "name": "JS - the Reference",
        "price":"99.99"
      }
    ]
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
