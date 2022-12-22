import React, { useState, useEffect } from "react";
import useOnClickOutside from "../../utils/UseOnClickOutSide";
import axios from "axios";
import { fetchArtists, selectedService } from "../../../actions";
import "./serviceItem.scss";
import { connect } from "react-redux";
import { set } from "lodash";




const ServiceItem = (props) => {

  const [selected, setSelected] = useState(false);
  const [hide, setHide] = useState(false);
  
 

  
  const { type, srcImg, title  } = props;

 


 
  

  const deselectItems = () => {

    setSelected(false);

  };
 
   
  useEffect(()=>{

   
   
    //hiding the UnSlected Service Items
    if(!selected && props.selectedService){
                     
      setHide(true);

     }
     //reset state if reserve ignored
     if(!props.selectedService){

        setHide(false);
        setSelected(false);

     }

    

  },[props.selectedService])
 

  //Ajax Resquest

  const handleServiceSelection = async () => {
    try {

      // const response = await axios.get(`http://127.0.0.1:8080/apps/ZedLine/app_api/api/artists/${type}`);
      // const response = await axios.get(`http://127.0.0.1:3001/artists`);
     
      props.fetchArtists(type);
      //SetArtistsData(response.data);
    } catch (error) {
      console.log(error.message);     
    }


  };
 
  const handleClick = (e)=>{
     
      
       setSelected(true);   
       handleServiceSelection();

  }


  //usign this util we can detect outside element clicks
  /*useOnClickOutside(deselectItems, ref);*/



 
  return (
     
    <React.Fragment>
    
   
      <li
        
        onClick = {(e)=>handleClick(e)}
        
        className={`service-picker__item  service-picker__item--make-up ${selected ? 'selected' : ''} ${hide ? 'hide' : ''}`}
      >
        <img src={srcImg} alt="service"/>
   
        <div>{title}</div>
   
      </li>
   
       
   
    </React.Fragment>
) 
 }
  
   

const mapStateToProps = (state, ownProps) => {

  
  
    return {selectedService : state.reservationInfo.selectedSerive}

};

export default connect(mapStateToProps, { fetchArtists })(ServiceItem);
