import React,{useEffect} from "react";


const OnScrollCustomHook = (selectionLevel, finalStep)=>{
  console.log(finalStep);
  
    useEffect(()=>{

      if(finalStep) {
        window.scroll({
          behavior: "smooth",
          top: 1300,
        });
        return;
      }


        console.log(selectionLevel); 
         switch (selectionLevel) {

           case 0 : 
           {
 
            console.log("0");
            window.scroll({
             behavior: "smooth",
             top: 0,
           });
            break;
           }
           

          case 1 :{
            console.log("1");
            window.scroll({
                behavior: "smooth",
                top: 250,
              });
              break;
            }

           case 2 :
            {
              console.log("2");
            window.scroll({
                behavior: "smooth",
                top: 600,
              });
              break;
            }
            
            case 3 :
              {
              console.log("3");
                 window.scroll({
                  behavior: "smooth",
                  top: 800,
                });
              break;

            }    


         }
         

    },[selectionLevel , finalStep]) ; 
 
}

export default OnScrollCustomHook;


 