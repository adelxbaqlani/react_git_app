import React , {useEffect} from "react";
import "../src/styles/sass/app.scss";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import Blog from "./pages/Blog";
import Blog_detail from "./pages/Blog_detail";
import Reservation from "./pages/Reservation";
import Profile from "./pages/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReserveationModal from "./pages/ReserveationModal";
import ReservationHistory from "./pages/Reservation_history";

const App = (props) => {

  



  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}  />
          {/* <Route path="/reservation" element={<Reservation />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/blog-detail/:id" element={<Blog_detail />} />
          <Route path="/reserve-modal" element={<ReserveationModal/>}/>
          {props.reservationCompleted ? 
            <Route path="/reservation" element ={<ReservationHistory/>} /> :     
            <Route path="/reservation" element={<Reservation />} /> }  
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state,ownProps) =>{
  return {
    reservationCompleted : state.reservationStatus.reservationCompleted,
  }
}


export default connect(mapStateToProps,null)(App);

