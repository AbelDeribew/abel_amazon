import React from 'react'
import'./Home.css';
import Product from './Product';

function Home() {
  return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home_row">
					<Product
						id="01"
						title="Audio-Technica ATH-M20X Professional Studio Monitor Headphones, Black"
						price={24.94}
						rating={5}
						image={
							"https://m.media-amazon.com/images/I/71HlB-gf46L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
						}
					/>
					<Product
						id="02"
						title="Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, 
            Even If You’re New to Programming "
						price={11.96}
						rating={5}
						image={
							"https://m.media-amazon.com/images/I/41BhGsAx7lL._SX384_BO1,204,203,200_.jpg"
						}
					/>
				</div>

				<div className="home_row">
					<Product
						id="03"
						title="
            GIGABYTE B650M DS3H (AM5/ LGA 1718/ AMD/ B650/ Micro ATX/ 5-Year Warranty/ DDR5/ PCIe 4.0 M.2/ PCIe 4.0/ USB 3.2"
						price={745}
						rating={4}
						image="https://m.media-amazon.com/images/I/81LJcmxuEPL._AC_SL1500_.jpg "
					/>
					<Product
						id="04"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
					<Product
						id="05"
						title="Mongoose Flatrock Youth/Adult Hardtail Mountain Bike"
						price={78.99}
						rating={4}
						image={
							"https://m.media-amazon.com/images/I/81eVzlMwsKS._AC_SX679_.jpg"
						}
					/>
				</div>

				<div className="home_row">
					<Product
						id="06"
						title="Acer EI491CR Sbmiiiphx 49 1800R Curved DFHD (3840x1080) Gaming Monitor | AMD FreeSync Premium Pro 32:9 | Up to 144Hz | 4ms | 90% DCI-P3 | DisplayHDR400 | 1xDisplay Port 1.2"
						price={750.08}
						rating={5}
						image={
							"https://m.media-amazon.com/images/I/71FdF2MhJeL._AC_SX679_.jpg"
						}
					/>
				</div>
				<div className="home_row">
					<Product
						id="07"
						title="Gunnar - Premium Premium Gaming and Computer Glasses"
						price={12.43}
						rating={5}
						image={
							"https://m.media-amazon.com/images/I/819UY1hKm5L._AC_UX569_.jpg"
						}
					/>
					<Product
						id="08"
						title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
						price={745}
						rating={4}
						image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home