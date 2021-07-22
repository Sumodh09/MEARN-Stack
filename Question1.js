function v(){
	var t = document.getElementById("input_text").value;
	var find =  document.getElementById("find").value;
	var replace =  document.getElementById("replace").value;
	t = t.replaceAll(find,replace);
	alert(t);
}