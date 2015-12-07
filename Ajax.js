function ajax(json){

		     var xhr=null;

  			if(window.XMLHttpRequest){

  				xhr=new XMLHttpRequest();
  			}else{

  				xhr=new ActiveXObject('Microsoft.XMLHTTP');
  			}

  			if(json.type=='get' && json.data){
  				json.url+='?'+json.data;
  			}
	
  			xhr.open(json.method,json.url,true);

  			if(json.type=='get'){

  				xhr.send();		
  			}else{
  				xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
  				xhr.send(json.data);		
  			}
 
  			xhr.onreadystatechange=function(){
	  				if(xhr.readyState==4){
	  					
		  					if(xhr.status==200){	
		  						if(json.success){json.success(xhr.responseText);}	
		  					}else{
		  						alert('出错了，Err:'+xhr.status);
		  					}
	  				}
  			};

}
