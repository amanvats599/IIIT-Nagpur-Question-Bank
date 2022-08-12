function convert1(){
    var z=document.getElementById("secretdiv1");
     z.style.display="block";
    var a = parseInt( document.getElementById("mph").value) ;
    var r = 1.60934*a;
    
    var s= document.getElementById("r1");
    s.innerHTML=("Speed of Ball in kmph is "+r+" ");
   
    }
function convert2(){
        var y=document.getElementById("secretdiv2");
         y.style.display="block";
        var b = parseInt( document.getElementById("run").value) ;
        var c = parseInt( document.getElementById("balls").value) ;
        if (c>6){
            alert("Please enter balls left between 0 and 6");
        }
        var d = parseInt( document.getElementById("overs").value) ;

        c=c/6;
        d=d+c;
        var e = b/d;
        
        
        var s= document.getElementById("r2");
        s.innerHTML=("Required run rate is  "+e+" ");
       
        }
    
    var index = 0;

    function change() {
        

        //Here I have collected all the images with class 'slides'
        var x = document.getElementsByClassName('slides');

        //Set all the images display to 'none' (invisible)
        for(var i = 0; i < x.length; i++) { 
            x[i].style.display = "none"; 
        }

        index++;

        //Set index to 1 if it's greater than the amount of images
        if(index > x.length) { 
            index = 1; 
        }

        //set image display to 'block' (visible)
        x[index - 1].style.display = "block";

        //set loop to change image every 3000 milliseconds (3 seconds)
        setTimeout(change, 3000);
    }
