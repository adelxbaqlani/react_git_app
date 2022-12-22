import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchArtistDates } from "../../../actions";
import useOnClickOutside from "../../utils/UseOnClickOutSide";
import "./artistItem.scss";

const ArtistItem = (props) => {

  const [selected, setSelected] = useState(false);
  const [hide,setHide] = useState(false);
  
  const { name, profession, id, fetchArtistDates, reservationData } = props;

  const deselectItems = () => {
    setSelected(false);
  };

  // useOnClickOutside(deselectItems, ref);

  useEffect(() => {
  
    if(!selected && props.selectedArtist){
                     
      setHide(true);

     }
     if(_.isEmpty(props.selectedArtist)) {
      setHide(false);
      setSelected(false);
     }

  }, [props.selectedArtist]);

  return (
    <li
      
      onClick={() => {
        if(selected == false){
          
          fetchArtistDates(id, profession, name);
          setSelected(true);
        }
        
      }}
      className={`list-item ${selected ? "selected" : ""} ${hide ? 'hide' : ''}`}
    >
      {props.children}
      <div className="list-item__name" href="#">
        {name}
      </div>
      <div className="list-item__profession">{profession}</div>
    </li>
  );
};
const mapStateToProps = (state ,ownProps)=>{
return { selectedArtist : state.reservationInfo.selectedArtist }
}
export default connect(mapStateToProps, { fetchArtistDates })(ArtistItem);
