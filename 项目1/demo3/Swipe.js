function Swipe(container) {
	// var container = $("#content");  
	var element = container.find(":first");
	var swipe = {};  //定义一个空对象，为下面的swipe做准备
	var slides = element.find("li");  //slides是一个数组
	var width = container.width();
	var height = container.height();
	element.css({
		width: (slides.length*width) + "px",
		height: height + "px"
	});
	$.each(slides,function(index) {
		var slide = slides.eq(index);
		slide.css({
			width: width + "px",
			height: height + "px"
		})
	});

	//监控完成与移动
	swipe.scrollTo = function(x,speed) {
		//执行与移动
		element.css({
			'transition-timing-function': 'linear',
			'transition-duration': speed + 'ms',
			'transform': 'translate3d(-' + x + 'px,0px,0px)'
		});
		// console.log(this);  //返回的是swipe对象
		return this;
	};
	// console.log(swipe); //返回的是swipe对象
	return swipe;
}