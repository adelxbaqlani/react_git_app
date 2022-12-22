import React from "react";
import './reserve_detail.scss';
 
 

const ReserveDetail = (props) => {
    const currentpath =  window.location.pathname;
    const {selectedArtist ,selectedDate , selectedService , selectedHour , passed} = props;
    

 
    return(
      <React.Fragment>
        <div className="reservation_info">
        <div className="reservation_item">اطلاعات رزرو:</div>

          <div className="reservation_item"> سرویس :{selectedService} </div>
          <div className="reservation_item"> آرتیست : {selectedArtist} </div>
          <div className="reservation_item"> تاریخ :{selectedDate} </div>
          <div className="reservation_item">ساعت : {selectedHour} </div>

          { passed &&  
          <div>
            <div className="reservation_item">
                 <div className="reservation_info__green-box"><p>
                    موعد در انتظار ...</p></div>   
            </div>  
          </div>
         }


        </div>
     
      </React.Fragment>
      
    );
  };

  export default ReserveDetail;