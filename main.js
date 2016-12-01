$(document).ready(function(){
	//import
	var del = [];
	$('#import').on('click',function(){
		var rowArr = GetText();
		var leng = rowArr.length;
		var text="";
		var click = [];
		for (var i = 0; i < leng; i++) {
		 	//thêm vào list ul
		 	if(rowArr[i]!=""){
		 		text+="<li id='li"+i+"'><a href='#'>";
		 		text+=rowArr[i];
		 		text+="</a></li>";
		 	}
		 	
		 }
		 $('#list').append(text);
		 $('#text').val(''); 
		 Paste();
	});

	//import top
	$('#importTop').on('click',function(){
		var rowArr = GetText();
		var leng = rowArr.length;
		var text="";
		for (var i = 0; i < leng; i++) {
		 	//thêm vào list ul
		 	if(rowArr[i]!=""){
		 	text+="<li><a href='#'>";
		 	text+=rowArr[i];
		 	text+="</a></li>";
		 }
		 }
		 $('#list').prepend(text);
		 $('#text').val(''); 
		 Paste();
	});

	function Paste(){
		var leng = $('#list li').length;
		for (var i = 0; i <  leng; i++) {
			del[i] = 0;
		}
	}
	//Select
	$('#list').on('click','li',function(){
		var index = $(this).index();
		del[index]++;
		if(parseInt(del[index])%2==0){
			//$(this).css('color', 'red');
			$(this).removeClass('del');

		}
		else{
			$(this).addClass('del');
		}
	});

	//Delete
	$('#del').on('click',function(){
		if($('#list li').hasClass('del')){
			$('.del').remove();
		}
		else{
			$('#list li').last().remove();
		}
	});

	//Export
	$('#export').on('click',function(){
		var leng = $('#list li').length;
		var arr =[];
		for (var i = 0; i <  leng; i++) {
			var val = $('#list li').eq(i).text();
			var li = "<li><input type='radio' value='"+val+"' /><a href='#' >"+val+"</a></li>";
			$('#result').append(li);
		}
		$('#list').children('li').remove();
	});

	//Order
	$('#order').on('click',function(){
		var leng = $('#list li').length;
		var arr =[];
		for (var i = 0; i <  leng; i++) {
			var val = $('#list li').eq(i).text();
			arr.push(val);
		}
		arr.sort();
		$('#list').children('li').remove();
		for (var i = 0; i <  leng; i++) {
			var li = "<li><a href='#'>"+arr[i]+"</a></li>";
			$('#list').append(li);
		}
	});
	//remove
	$('#result').on('click','input',function(){
		$(this).parent('li').fadeOut('3000', function() {
			
		});
	})
	//Get TExt
	function GetText(){
		var text = $('#text').val();
		return text.split("\n");
	}

	//Order Drag drop
	 $( "#list" ).sortable();
    $( "#list" ).disableSelection();

})