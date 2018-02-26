<template>
  <div id="app">
  	<header>
  		 <router-link to="/News">Go to News</router-link>
  		<a>热门话题</a>
  		<a>校花校草</a>
  		<a>关于我</a>
  	</header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
header{
	text-align: right;
}
header a{
	padding:0px 5px;
}
</style>
