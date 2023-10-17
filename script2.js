let toplist = document.querySelector('.slider-top10 .slider-top10__list');
let topitems = document.querySelectorAll('.slider-top10 .slider-top10__list .slider-top10_item');
let topprev = document.getElementById('top10-prev');
let topnext = document.getElementById('top10-next');

let tpactive = 0;
let lengthItem = topitems.length - 1;

topnext.onclick = function(){
	if(tpactive + 1 > lengthItem){
		tpactive = 0;
	}else{
		tpactive = tpactive + 1;
	}
	reSlider();
}
topprev.onclick = function(){
	if(tpactive - 1 < 0){
		tpactive = lengthItem;
	}else{
		tpactive = tpactive - 1;
	}
	reSlider();
}

function reSlider(){
	let checkany = topitems[tpactive].offsetLeft;
	toplist.style.left = -checkany + 'px';
}
