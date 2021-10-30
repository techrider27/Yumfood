var btn1=document.getElementById("btn1");
var Btn1=document.getElementById("Btn1")
let r1=document.getElementById('p1').textContent;

let total=0;
let count=0;
let count1=0;
btn1.onclick=function()
{
    count++;
    count1++;
    total=parseInt(r1)+total;
    document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
    +total;
    btn1.innerHTML=count + "+";
    Btn1.style.display="block";
}
Btn1.onclick=function()
{
  if(count1>0)
  {
    count--;
    count1--;
    total=total-parseInt(r1);

    if(count1==0)
    {
        btn1.innerHTML="+Add";
        Btn1.style.display="none";
        if(count==0)
          document.getElementById("ans").innerHTML ="";
        else  
          document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
          +total;
    }
   else{
        document.getElementById("ans").innerHTML = "You have selected total "+count+
        " items and total price is  "+total;
        btn1.innerHTML=count1 + "+";
   }
  }
}
////////////////////////////////////////////////
var btn2=document.getElementById("btn2");
var Btn2=document.getElementById("Btn2")
let r2=document.getElementById('p2').textContent;

let count2=0;
btn2.onclick=function()
{
    count++;
    count2++;
    total=parseInt(r2)+total;
    document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
    +total;
    btn2.innerHTML=count2 + "+";
    Btn2.style.display="block";
}
Btn2.onclick=function()
{
  if(count2>0)
  {
    count--;
    count2--;
    total=total-parseInt(r2);
   
    if(count2==0)
    {
        btn2.innerHTML="+Add";
        Btn2.style.display="none";
        if(count==0)
          document.getElementById("ans").innerHTML ="";
        else 
          document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
          +total;  
    }
   else{
        document.getElementById("ans").innerHTML = "You have selected total "+count+
        " items and total price is  "+total;
        btn2.innerHTML=count2 + "+";
   }
  }
}

////////////////////////////////////////////////
var btn3=document.getElementById("btn3");
var Btn3=document.getElementById("Btn3")
let r3=document.getElementById('p3').textContent;

let count3=0;
btn3.onclick=function()
{
    count++;
    count3++;
    total=parseInt(r3)+total;
    document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
    +total;
    btn3.innerHTML=count3 + "+";
    Btn3.style.display="block";
}
Btn3.onclick=function()
{
  if(count3>0)
  {
    count--;
    count3--;
    total=total-parseInt(r3);
   
    if(count3==0)
    {
        btn3.innerHTML="+Add";
        Btn3.style.display="none";
        if(count==0)
          document.getElementById("ans").innerHTML ="";
        else 
          document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
          +total;  
    }
   else{
        document.getElementById("ans").innerHTML = "You have selected total "+count+
        " items and total price is  "+total;
        btn3.innerHTML=count3 + "+";
   }
  }
}
////////////////////////////////////////////////
var btn4=document.getElementById("btn4");
var Btn4=document.getElementById("Btn4")
let r4=document.getElementById('p4').textContent;

let count4=0;
btn4.onclick=function()
{
    count++;
    count4++;
    total=parseInt(r4)+total;
    document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
    +total;
    btn4.innerHTML=count4 + "+";
    Btn4.style.display="block";
}
Btn4.onclick=function()
{
  if(count4>0)
  {
    count--;
    count4--;
    total=total-parseInt(r4);

    if(count4==0)
    {
        btn4.innerHTML="+Add";
        Btn4.style.display="none";
        if(count==0)
          document.getElementById("ans").innerHTML ="";
        else 
          document.getElementById("ans").innerHTML = "You have selected total "+count+" items and total price is  "
          +total;  
    }
   else{
        document.getElementById("ans").innerHTML = "You have selected total "+count+
        " items and total price is  "+total;
        btn4.innerHTML=count4 + "+";
   }
  }
}