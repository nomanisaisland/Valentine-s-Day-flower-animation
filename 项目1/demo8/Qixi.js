var container = $("#content");
var visualWidth = container.width();
var visualHeight = container.height();

var swipe = Swipe(container);
//获取数据(页面宽高和页面的移动数据)
var getValue = function(className) {
	var $elem = $('' + className + '');
	//走路的路线坐标
	return {  //返回元素的高度和数据，为设置小男孩的坐标做准备
		height: $elem.height(),
		top: $elem.position().top
	};
}
// 路的Y轴
var pathY = function() {
	var data = getValue(".a_background_middle");
	return data.top + data.height / 2;
}();

var $boy = $("#boy");
var boyHeight = $boy.height();
$boy.css({
	top: pathY - boyHeight + 25,
});


////////////////////////////////////////////////////////
//===================动画处理============================ //
////////////////////////////////////////////////////////
function restoreWalk() {
	$boy.removeClass("pauseWalk");
}
// 走
function slowWalk() {
	$boy.addClass("slowWalk");
}
// 计算移动距离
function calculateDist(direction,proportion) {  //direction是方向 proportion是要移动到页面的哪里
	return (direction = "x" ? visualWidth : visualHeight) * proportion
}

// 用transition做运动
function stratRun(options, runTime) {
	var dfdPlay = $.Deferred();  //延时返回值
	//恢复走路
	restoreWalk();
	$boy.transition(
		options,
		runTime,
		'linear',
		function() {})
	return dfdPlay;
}

function walkRun(time, dist , distY) {
	time = time || 3000;
	// 脚动作
	slowWalk();
	//开始走路
	var d1 = stratRun({
		"left": dist + "px",
		"top": distY ? distY : undefined
	},time);
	return d1;
}