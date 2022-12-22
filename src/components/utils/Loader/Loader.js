 import React from 'react';
 import './loader.scss';

const Loader = (props) => {
  const { show } = props;
    
  return (
    <div className={`lds-ellipsis loader loader--artists ${show ? 'show' : ''} `}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}


export default Loader;