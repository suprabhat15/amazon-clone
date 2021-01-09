import React from 'react'
import './Home.css'
import Product from './Product'
import logo from '../images/playing-it-my-way.png'
import logo1 from '../images/ipad.png'
import logo2 from '../images/harry_potter.png'
import logo3 from '../images/sony_led.png'
function Home() {
    return (
        <div className='home'>
            <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <div className="home__row">
        <Product
        id='1234'
        title="The Undisputed Champion"
        price={11.99}
        rating={5}
        image={logo}
        />
        <Product
        id='1235'
        title="New Apple iPad Pro (12.9-inch,Wi-Fi,128GB)-Silver(4th Generation)"
        price={249.99}
        rating={5}
        image={logo1}
        />
        </div>

        <div className="home__row">
        <Product
        id='1236'
        title="The Undisputed Champion"
        price={11.99}
        rating={5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
        id='1237'
        title="The Undisputed Champion"
        price={11.99}
        rating={5}
        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
        <Product
        id='1238'
        title=" Harry Potter- The main character and protagonist of the book."
        price={11.99}
        rating={5}
        image={logo2}
        />
        </div>
 
    <div className="home__row">
      <Product
        id='1239'
        title="Sony 49FRUTEN59 49' 4K Gaming Monitor - Super
        Ultra Wide Dual 5130 x 1440" 
        price={149.99}
        rating={5}
        image={logo3}
        />
     </div>
 </div>

    )
}

export default Home
