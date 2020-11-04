var player1='player1';
var player2='player2';
function fun()
{

	setTimeout(function(){
        window.location.href = 'firstpage.html';
    }, 7000);
}
function fun2()
{
	player1=document.getElementById("play1").value.trim();
    player2=document.getElementById("play2").value.trim();
           localStorage.setItem('player1',player1);
           localStorage.setItem('player2',player2);
		if(player1.length<1||player2.length<1 )
	{
		alert("fill all the fields");
	}
	else
	{
		window.location.href = 'game.html';
	}
}
var flag=0;
var Tarun=1;
var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");
function om()
{
	
	document.getElementById('first').value=player1;
	document.getElementById('second').value=player1+" turn";
	document.getElementById('third').value=player2;
}	
var arr=new Array(3);
var i=0,str1,str2,k=0;
for(i=0;i<3;i++)
{
	arr[i]=new Array(3);
}
for(i=0;i<3;i++)
{
	for(var j=0;j<3;j++)
	{
		arr[i][j]=k++;
	}
}
function func3(a)
{

	console.log(document.getElementById('dog').children);
	str1=a.slice(1,2);
	str2=a.slice(2);
	if(Tarun%2==0)
	{
		document.getElementById('second').value=player1 +" turn";
		document.getElementById(a).innerHTML='0';
		document.getElementById(a).style.color='white';
		document.getElementById(a).style.fontSize="25px";
		document.getElementById(a).disabled=true;
		arr[str1][str2]='0';
	}
	else{
		document.getElementById('second').value=player2 +" turn";
		document.getElementById(a).innerHTML='X';
		document.getElementById(a).style.color='white';
		document.getElementById(a).style.fontSize="25px";
		document.getElementById(a).disabled=true;
		arr[str1][str2]='X';
	}
	if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2])//1 horizontal
	{
		if(arr[0][0]=='X'){ document.getElementById('second').value=player1+" Wins"; }
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
         document.getElementsByClassName('btn').disabled=true;
         document.getElementById("_00").style.backgroundColor="orange";
         document.getElementById("_01").style.backgroundColor="orange";
         document.getElementById("_02").style.backgroundColor="orange";
         flag=1;
		
	}
	else if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2])//2 horizontal
	{
		if(arr[1][0]=='X'){ document.getElementById('second').value=player1+" Wins";}
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_10").style.backgroundColor="orange";
         document.getElementById("_11").style.backgroundColor="orange";
         document.getElementById("_12").style.backgroundColor="orange";
		
		flag=1;
	}
	else if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2])// 3 horizontal
	{
		if(arr[2][0]=='X'){ document.getElementById('second').value=player1+" Wins";}
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_20").style.backgroundColor="orange";
         document.getElementById("_21").style.backgroundColor="orange";
         document.getElementById("_22").style.backgroundColor="orange";
         flag=1;
		
	}
	else if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0])//1 vertical
	{
		if(arr[0][0]=='X'){ document.getElementById('second').value=player1+" Wins";}
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_00").style.backgroundColor="orange";
         document.getElementById("_10").style.backgroundColor="orange";
         document.getElementById("_20").style.backgroundColor="orange";
         flag=1;
		
	}
	else if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1])//2 vertical
	{
		if(arr[0][1]=='X'){ document.getElementById('second').value=player1+" Wins"; }
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_01").style.backgroundColor="orange";
         document.getElementById("_11").style.backgroundColor="orange";
         document.getElementById("_21").style.backgroundColor="orange";
         flag=1;
		
	}
	else if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2])//3 vertical
	{
		if(arr[0][2]=='X'){ document.getElementById('second').value=player1+" Wins";}
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_02").style.backgroundColor="orange";
         document.getElementById("_12").style.backgroundColor="orange";
         document.getElementById("_22").style.backgroundColor="orange";
         flag=1;
		
	}
	else if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2])//1 diagonal
	{
		if(arr[0][0]=='X'){ document.getElementById('second').value=player1+" Wins"; }
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_00").style.backgroundColor="orange";
         document.getElementById("_11").style.backgroundColor="orange";
         document.getElementById("_22").style.backgroundColor="orange";
         flag=1;
		
	}
	else if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0])//1 diagonal
	{
		if(arr[0][2]=='X'){ document.getElementById('second').value=player1+" Wins";}
		else{document.getElementById('second').value=player2+" Wins";}
         document.getElementById('second').style.color=" red";
          document.getElementById("_02").style.backgroundColor="orange";
         document.getElementById("_11").style.backgroundColor="orange";
         document.getElementById("_20").style.backgroundColor="orange";
         flag=1;
		
	}
	if(Tarun==9)
	{ if(flag==0){
		document.getElementById('second').value="Tie";
		document.getElementById('second').style.color=" green";}

	}
	Tarun++;
}
