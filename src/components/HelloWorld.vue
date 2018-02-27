<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <app-banner :imgArray="imgArray"></app-banner>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Banner from '@/components/banner'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to entry '+this.$store.state.schoolName,
      imgArray: [
           "https://bpic.588ku.com/back_pic/03/52/41/215794509beebb9.jpg!/fw/320/quality/90/unsharp/true/compress/true", 
           "https://bpic.588ku.com/back_pic/04/27/47/84583bc9240f5fb.jpg!/fw/320/quality/90/unsharp/true/compress/true", 
           'https://bpic.588ku.com/back_pic/03/52/41/4857945218855e9.jpg!/fw/320/quality/90/unsharp/true/compress/true', 
           "https://bpic.588ku.com/back_pic/03/63/72/4857ac653d141f6.jpg!/fw/320/quality/90/unsharp/true/compress/true", 
           "https://bpic.588ku.com/back_pic/03/63/72/4857ac653d141f6.jpg!/fw/320/quality/90/unsharp/true/compress/true"
        ]
    }
  },
  components: {
    'app-banner': Banner
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1{
  background: #eee;
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
.hello{
	
	background-size:cover ;
}
</style>
