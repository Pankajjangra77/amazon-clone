import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB658235929_.jpg" alt=""></img>

                <div className="home__row">
                    <Product
                        id= "741852"
                        title="The Lean Startup | Bhut achi book h khrid lo"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="789456"
                        title="Bourge Men's Loire-z189 Running Shoes | Ek no k jute h lelo bhai"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vwCXqAfUL._UL1500_.jpg"
                        rating={5}
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="785386"
                        title="KMJSA AB010 M4 | Bluetooth Wireless Smart | Sports Watch Compatible with All Android and iOS Device | Heart Rate and BP Monitor - Calories Counter"
                        price={25.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/31Brq4HngzL.jpg"
                        rating={3}
                    />
                    <Product
                        id="852963"
                        title="Infinity (JBL) Fuze 100 Deep Bass Dual Equalizer IPX7 Waterproof Portable Wireless Speaker (Charcoal Black)"
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QmRXKHWEL._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="123789"
                        title="New Apple iPhone 12 (64GB) - Green | Sheeshe k aage photo leke instagram pe dalna Cool lagoge"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="789159"
                        title="Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports | Bhaut chauda TV hai ye"
                        price={1999.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/91%2BfneWO62L._SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
