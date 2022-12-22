import React from "react";
import ArtistItem from "./ArstistItem/ArtistItem";
import { FiUserCheck } from 'react-icons/fi';
import "./artistPicker.scss";

import { connect } from "react-redux";

const ArtistPicker = (props) => {

  const { artists } = props;
  


  const renderArtistsItems = () => {
    
    return artists.map((artist) => {
      
      return (
        <ArtistItem
 
          id={artist.id}
          key={artist.id}
          name={artist.name}
          profession={artist.profession}
        >
          <FiUserCheck className="artist-item__icon" />
        </ArtistItem>
      );
    });
  };

  return (
    <div>
      {" "}
      {artists.length !== 0 ? (
        <div className="artist-picker">
          {/* <div className="artist-picker__title"> ارتیست </div> */}
          <div className="artist-picker__description">
            ارتیست مورد نظر را انتخاب کنید
          </div>
          <ul className="artist-picker__list">{renderArtistsItems()}</ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    artists: Object.values(state.artists),
  };
};

export default connect(mapStateToProps, null)(ArtistPicker);
