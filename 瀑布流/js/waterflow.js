
//插件封装
(function($){
	$.fn.extend({
		waterflow:function(){
			//获取整个容器宽度
			var boxWidth=this.width();
			//获取里面每条内容item的宽度
			var items=this.find('.item');
			var itemWidth=items.outerWidth();
			//定义每一行显示5个
			var rowNum=5;
			//计算出空隙
			var space=(boxWidth-(itemWidth*rowNum))/(rowNum-1);
			//数组记录每列的高度  itemArray[0]=100; itemArray[1]=500;
			var itemArray=[];
			//循环每一个item元素
			items.each(function(index,el){
				//判断第一行所有元素距离上面是0
				if(index<rowNum){
					itemArray[index]=$(el).outerHeight();
					//计算第一行每个元素距离左边距离
					var left=index*(itemWidth+space);
					$(el).css({
						top:0,
						left:left
					});
				}else{
					//除了第一行以外其他元素
					//假设第一个元素的高度是最小的
					var minHeight=itemArray[0];
					var minIndex=0;
					var height=$(el).outerHeight(); //获取当前循环元素的高度
					for(var i in itemArray){
						//找到比第一个还要小的元素的下标及高度值
						if(itemArray[i]<minHeight){
							minHeight=itemArray[i];
							minIndex=i;
						}
					}
					//把最小的元素高度当前元素的高度存在最小元素的下标
					itemArray[minIndex]=minHeight+height+space;
					$(el).css({
						top:minHeight+space,
						left:minIndex*(itemWidth+space)
					});
				}
			});
		}
	});
})(jQuery);

(function($){
  
})(jQuery);

$(window).on('load',function(){
	$('.items').waterflow();
});

