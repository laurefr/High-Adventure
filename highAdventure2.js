// Create an event Listener for the button
var event1 = document.getElementById("button1").addEventListener("click", criteria, false);

// Create a function name criteria

function criteria(){
  
    
     // Create variable for the 3 inputs
    var age = parseInt(document.getElementById("yourAgebox").value);
    var weight = parseInt(document.getElementById("YourWeightbox").value);
    var height = parseInt(document.getElementById("yourHightbox").value);
    
    
// Create a condition for the age weigth and hight
if ((age < 26) && ((weight > 50) && (weight < 90)) && ((height>150) && height<190))
{   
document.getElementById("youAreSuccessful").innerHTML ="Well done you have met the criteria, click next to continu your booking." ;
} //end of outer if
    else if(age > 26)
        {
            
        }
    else if(height <150 || height > 190)
        {
            
        }
    else if(weight < 50 || weight > 90)
        {
            
        }
    else
        {
            
        }

    if (age < 26)
    {

    document.getElementById("youAreSuccessful").innerHTML ="Well done you have met the criteria, click next to continu your booking." ;

    } 
    else
    {
        document.getElementById ("Unsuccessful").innerHTML= "Sorry you did not met the criteria  " + age + "  Your an oldie!";    
        document.getElementById ("Unsuccessful").innerHTML= "Sorry your height does not met the criteria " + height +"cm" + " you must be between 150 cm and 190cm.";
        
        document.getElementById ("Unsuccessful").innerHTML= "Sorry you did not met the criteria  " + age + "  Your an oldie!";    
        document.getElementById ("Unsuccessful").innerHTML= "Sorry your weight does not met the criteria kg " + weight + " you must weight be between 50kg and 90kg.";
       
    }
    
    


   
        


   
    
  
    }//end of function
