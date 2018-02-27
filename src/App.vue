<template>
  <div id="app">
  	<header>
  		 <router-link to="/">Go to main</router-link>
  		 <router-link to="/News">Go to News</router-link>
  		 <router-link to="/moments">Go to Moments</router-link>
  		<a>school students</a>
  		<a>about me</a>
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
	body{
		width:100%;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  /*margin-top: 60px;*/
}
header{
	text-align: right;
}
header a{
	padding:0px 5px;
}
</style>
