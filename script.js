var flag = false;
var dktop = $('#dktop'); //document.getElementById('dktop');
function clearAll() {
	dktop.val(" ");
}
function binhPhuong() {
	var x2 = dktop.val();
	x2 = x2 * x2;
	dktop.val(x2) ;
}
function sqrt() {
	var s = Math.sqrt(dktop.val()) ;
	dktop.val(s);
}
function giaiThua (){
	
	var n = 1;
	for(var i = 1; i <= dktop.val(); i++){
		n = n * i;
	}
	dktop.val(n);
}
function del() {
	var del = dktop.val()
	del = del.substr(0, del.length - 1)
	dktop.val(del);
}
function number7() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x +="7";
	dktop.val(x);
}
function number8() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += "8"
	dktop.val(x);
}
function number9() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 9;
	dktop.val(x)
}
function layDu() {
	flag = false;
	var x = dktop.val();
	x += "%";
	dktop.val(x);
}
function log10() {
	if(flag == true){
		clearAll();
	}
	flag = true;
	dktop.val(Math.LN10) ;
}
function number4() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	 var x = dktop.val();
	 x += 4;
	 dktop.val(x)
	
}
function number6() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 6;
	dktop.val(x)
	
}
function number5() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 5;
	dktop.val(x)
}
function nhan() {
	flag = false;
	x = dktop.val();
	 x += "*";
	 dktop.val(x);
	
	
}
function tru() {
	flag = false;
	x = dktop.val();
	x += "-";
	dktop.val(x);
	
}
function number1() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 1;
	dktop.val(x)
	
}
function number2() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 2;
	dktop.val(x)
	
}
function number3() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 3;
	dktop.val(x)
}
function chia() {
	flag = false;
	x = dktop.val();
	x += "/";
	dktop.val(x);
}
function cong() {
	flag = false;
	x = dktop.val();
	x += "+";
	dktop.val(x);
}
function number0() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 0;
	dktop.val(x)
}
function cham() {
	x = dktop.val();
	x += ".";
	dktop.val(x);
}
function pi() {
	if(flag == true){
		clearAll();
	}
	flag = false;
	var x = dktop.val();
	x += 3.14;
	dktop.val(x)
}
function cal() { 
	var KQ = eval (dktop.val());
	dktop.val(KQ);
	flag = true;

}
var slider = true;
$(function(){
	$("#changetheme").click(function(){
		$(".container").slideUp(4000);
		setTimeout(function(){
			$("#slideDown").show();
		},4000)
		
	})
	});
$(function(){
	
	$('#slideDown').click(function(){
		$(".container").slideDown(4000);
		$('#slideDown').hide(0);
	})
});

