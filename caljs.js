function dis(val) 
{ 
	document.getElementById("result").value+=val ;
} 
		
function sine() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.sin(x);
	document.getElementById("result").value = y;
} 
function invsine() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.asin(x);
	document.getElementById("result").value = y;
} 
			
function cose() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.cos(x);
	document.getElementById("result").value = y;
} 
function invcose() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.acos(x);
	document.getElementById("result").value = y;
} 
	
		
function tane() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.tan(x);
	document.getElementById("result").value = y;
} 

function invtane() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.atan(x);
	document.getElementById("result").value = y;
} 

function squ() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.pow(x,2);
	document.getElementById("result").value = y;
}
		
function cube() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.pow(x,3);
	document.getElementById("result").value = y;
}
function tenpow() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.pow(10,x);
	document.getElementById("result").value = y;
}
	
function root() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.sqrt(x);
	document.getElementById("result").value = y;
}

function cuberoot()
{
	var x = document.getElementById("result").value ;
	var y = Math.pow(x,1/3);
	document.getElementById("result").value = y;
}
	
function lne() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.log(x);
	document.getElementById("result").value = y;
}

function loge() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.log10(x)
	document.getElementById("result").value = y;
}

function inverse() 
{ 
	var x = document.getElementById("result").value ;
	var y = 1/x;
	document.getElementById("result").value = y;
}

function fact() 
{ 
	var x = document.getElementById("result").value ;
	var y = 1;
	for(var i=x;i>1;i--)
	{
		y=y*i;
	}
	document.getElementById("result").value = y;
}	

function expe() 
{ 
	var x = document.getElementById("result").value ;
	var y = Math.exp(x) ;
	document.getElementById("result").value = y ;
}

function solve() 
{ 
	var x = document.getElementById("result").value ;
	var y = eval(x) ;
	document.getElementById("result").value = y ;
} 
		
		
function clr() 
{ 
	document.getElementById("result").value = "" ;
} 
function backspace() 
{ 
	document.getElementById("result").value = document.getElementById("result").value.substring(0,document.getElementById("result").value.length-1);
} 
		
