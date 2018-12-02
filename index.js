

// var li=document.getElementById('tabs').getElementsByTagName('li')
// console.log(li)
// var ul=document.getElementById('lists').getElementsByTagName('ul')
// for (var i = 0; i < li.length; i++) {
// 	li[i].onclick=showlist
	
// }

// function showlist(){
// 	for (var i = 0; i < li.length; i++) {
// 	if (li[i]===this) {
// 			li[i].className='active'
// 			ul[i].className='show-detail clear'
// 		}else{
// 			li[i].className='',
// 			ul[i].className='clear'

// 		}
	
// }
// }
// 
// 
// 
// $('#tabs').on('click','li',function (e) {
	

// 	if(!$(this).hasClass('active'))
// 		{$(this).addClass('active').siblings().removeClass("active");}
// 	else{$(this).removeClass('active')}
// 		console.log($('#lists ul'))

	



	
// })
$('#tabs li').click(function(){
	var i=$(this).index()
	$(this).addClass('active').siblings().removeClass('active')
	$('#lists ul').eq(i).show().siblings().hide();
})









$(window).scroll(function(){
	var a=$(document).scrollTop();
	// var fixed=document.getElementById('fixed')
	console.log(a)
	if (a>260) {
		$('#fixed-nav').addClass('seckillfix')
	}else{
		$('#fixed-nav').removeClass('seckillfix')
	}
})

		
		


	
	