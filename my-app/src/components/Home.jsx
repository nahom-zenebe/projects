import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>

<img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/>
   <div className='home__row'>
      <Product           id="1"
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={1009}
          rating={4}
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
      <Product id="2"
          title="Solid Gold Petite Micropave"
          price={899}
          rating={5}
          image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"/>
      </div> 


      <div className='home__row'>
      <Product  id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
         />
      <Product id="3"
          title="Mens Cotton Jacket"
          price={499}
          rating={5}
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"/>
      <Product           id="4"
          title="Mens Casual Slim Fit"
          price={699}
          rating={3}
          image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"/>
      </div> 


      <div className='home__row'>
      <Product  id="5"
          title="Mens Casual Premium Slim Fit T-Shirts"
          price={500}
          rating={5}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"/>
    
      </div> 



      </div>



    </div>
  )
}

export default Home