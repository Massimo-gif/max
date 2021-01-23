function get (){
	//滚动条距离顶部的距离
	var topverb1 = document.documentElement.scrollTop;
        //body文本内容的高度,也可以直接设置文本的高度但不能加 px
	var topverb2 = document.body.scrollHeight= 300;
  //var topverb2 = document.body.scrollHeight="300";
	if(topverb1>=topverb2/3){
		document.getElementById("gethideen").style.display="inherit";
	}else{
		document.getElementById("gethideen").style.display="none";
	}
}

