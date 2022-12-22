import React, { useState , useEffect } from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import { connect } from "react-redux";
import './servicePicker.scss';
 
import { increase } from '../../actions/index.js'
import Loader from "../utils/Loader/Loader";



import image_1 from '../../imgs/Layer_1.png';
import image_2 from '../../imgs/Layer_2.png';
import image_3 from '../../imgs/Layer_3.png';


 

const ServicePicker = () => {




  const [showLoader, setShowLoader] = useState(false);



  return (
    <React.Fragment>
      <section className="section-service-picker" >
        <div className="section-service-picker__title">
          سرویس مورد نظر را انتخاب کنید
        </div>

        <ul className="service-picker">

          <ServiceItem title='میکاپ' srcImg={image_2} type='make-up'   />
 
          <ServiceItem title='ناخن' srcImg={image_1} type='nail'  />

          <ServiceItem title='مو' srcImg={image_3} type='hair'  />


        </ul>

      </section>
      <Loader show={showLoader} />
    </React.Fragment>

  )
}

const mapStateToProps = (state , ownProps)=>{

}

export default ServicePicker;