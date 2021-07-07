import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home__row">
                <Product
                    id="1"
                    title="Macbook Pro 13''"
                    price={1656.22}
                    rating={5}
                    image="https://images.macrumors.com/t/j1ksdiuVG29iz5MA0CcAhDcY9Ow=/400x0/filters:quality(90)/article-new/2020/03/macbook-pro-13-inch.jpg?lossy"
                />
                <Product
                    id="2"
                    title="Macbook Air"
                    price={1251.94}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1603332211000"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Iphone 11 Pro Max"
                    price={1265.41}
                    rating={3}
                    image="https://img.router-switch.com/media/customoptions/79/1/1/iphone-11-pro-max-gold.jpg"
                />
                <Product
                    id="4"
                    title="LG 49WL95C-W 49 Inch 32:9 UltraWide Dual QHD IPS Curved LED Monitor with HDR 10"
                    price={1499.99}
                    rating={4}
                    image="https://www.lg.com/us/images/monitors/md06064396/gallery/1100-3.jpg"
                />
                <Product
                    id="5"
                    title="Anker Data Hub A7516011 4-Port USB Charger"
                    price={21.55}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BotISxx8L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="LG 3 Star RT26FARZASP Samsung Refrigerator, Capacity: 300 L, Double Door"
                    price={350.38}
                    rating={2}
                    image="https://5.imimg.com/data5/FB/VL/GT/SELLER-36249512/rt26farzasp-samsung-refrigerator-500x500.jpg"
                />
            </div>
        </div>
    );
}

export default Home
