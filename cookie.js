
function setCookie(key,value,day){
	if(day){
		var d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie = key + "=" + value + ";expires=" + d;
		
	}else{
		document.cookie = key + "=" +value;
	}
	
}
function getCookie(key){
	if(document.cookie){
		var str = document.cookie;
		var arr = str.split("; ");
		for(var i = 0;i < arr.length;i++){
			item = arr[i].split("=");
			if(item[0] ==key){
				return item[1];
			}
		}
		return [];
	}
	return [];
}
function removeCookie(key){
	setCookie(key,"",-1);
	
}