<template>
	<div>
		<div>id is {{msg}}</div>
		<div>{{detail}}</div>
	</div>
</template>

<script>
	export default {
		name:"newsdetail",
		data(){
			return {
				id:this.$route.query.id,
			}
		},
		computed:{
			msg:function(){
				return this.id
			},
			detail:function(){
		   		return "接口状态："+this.$store.state.newDetail.code
		   	}
		},
		methods:{
			getNewsDetail:function(){
				let param={
					id:this.id
				};
				this.$store.dispatch('getNewsDetail',param).code
			}
		},
		created(){
			this.getNewsDetail();
		}
	}
</script>

<style>
</style>
