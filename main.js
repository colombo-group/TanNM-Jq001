$(document).ready(function(){
	//import
	$('#import').on('click',function(){
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
		 $('#list').append(text);
		 $('#text').val(''); 
	});

	//import top
	$('#importTop').on('click',function(){
		var rowArr = GetText();
		var leng = rowArr.length;
		var text="";
		for (var i = 0; i < leng; i++) {
		 	//thêm vào list ul
		 	text+="<li>< a 	href='#'>";
		 	text+=rowArr[i];
		 	text+="</a></li>";
		 }
		 $('#list').prepend(text);
		 $('#text').val(''); 
	});

	//Select
	$('#list').on('click','li',function(){
		$(this).children('a').css({
			color: 'grey'
		});
		$(this).addClass('del');
	});
	//Delete
	$('#del').on('click',function(){
		$('.del').remove();
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
	$('#result').on('click',function(){
		$("input:checked").parent('li').remove();
	});

	//Get TExt
	function GetText(){
		var text = $('#text').val();
		return text.split("\n");
	}

	//Order Drag drop
	 $( "#list" ).sortable();
    $( "#list" ).disableSelection();

})