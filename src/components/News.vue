<template>
	<div>
		<div class='news-title'>{{msg}}</div>
		<ul v-for="(items, index) in schoolNewList" class='newlist' >
			<li class='newitem' @click="goNewsDetail(items.id)">
				<div class='newitem-left'>
					<img  :src="items.smallPortrait" class='new-image'/>
				</div>
				<div class='newitem-right'>
					<div class='title'>
						<a>{{items.title}}</a>
					</div>
					<div class='content'>
						<span>{{items.content}}</span>
					</div>
					<div class='right-foot'>
						<a>{{items.nickName}}</a>
						<a>{{items.collegeName}}</a>
					</div>
				</div>
			</li>
		</ul>
		<page :page-current="1" :page-total="13" :page-show="5"></page>
	</div>
</template>

<script>
import page from '@/components/page';
export default {
  name: 'News',
  data () {
    return {
      msg: this.$store.state.schoolName+' news'
    }
  },
  methods:{
  	getNewlists () {
	   this.$store.dispatch('getNewlists')
	},
	goNewsDetail:function(id){
		console.log(this.$router)
		this.$router.push({
			path: 'newsDetail', 
			query: {id: id}
		})
	}
  },
  components:{
	    page,
//	    props: ['childCurrent','childTotal','childShow']
	},
  computed: {
   	schoolNewList:function(){
   		return this.$store.state.schoolNewList.body
   	}
  },
  created(){
  	this.getNewlists();
  }
}
</script>

<style scoped="scoped">
	ul,li{
		padding:0;
		margin:0;
		list-style: none;
	}
	.news-title{
		margin-top:50px;
		font-size:20px;
		font-weight: 700;
	}
	.newlist{
		width:100%;
		display: flex;
		justify-content:center;
		align-items: center;
	}
	.newitem{
		width:80%;
		display: flex;
		justify-content: flex-start;
		margin:5px 0;
		border-bottom: solid 1px #eee;
	}
	.newitem-left{
		width:20%;
	}
	.newitem-left img{
		width:60%;
	}
	.newitem-right{
		width:70%;
	}
	.newitem-right .title{
		width:100%;
		display: flex;
		justify-content: center;
	}
	.newitem-right .content{
		width:100%;
		display: flex;
		justify-content: flex-start;
	}
	.new-image{
		height:100px;
		width:100px;
	}
	.right-foot{
		display: flex;
		justify-content: flex-end;
	}
	.right-foot a{
		margin-left:10px;
	}
</style>