import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
 const Home = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
 
   return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
           <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Plan Your Trip !!!
           </h1>
           <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
             Travel to your favourite city !
           </p>
           {/* <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                <a href="#">Explore Now</a>
              </button> */}
        </div>

        <div  className="homeCard grid">
           <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder='Your Destination'/>
           </div>
           <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder='1 Kms'/>
           </div>

           <div data-aos="fade-right" data-aos-duration="2000" className='locationDiv'>
            <label htmlFor="date">Select your Date</label>
            <div className='inputflex'><input type='date'/></div>
           </div>

           <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Price Range</label>
              <input type="text" placeholder='$100-$500'/>
           </div>
           <button data-aos="fade-left" data-aos-duration="3500" className='btn'>Search</button>
        </div>
      </div>
    </section>
   )
 }
 
 export default Home