import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header_logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
				/>
			</Link>

			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
				{/* logo */}
			</div>
			<div className="header_nav">
				<Link to={!user && "/login"} className="headr-clearlink">
					<div onClick={handleAuthentication} className="header_option">
						<span className="header_optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header_optionLineTwo">
							{" "}
							{user ? "sign out" : "sign In"}{" "}
						</span>
					</div>
				</Link>
				<Link to="/Orders" className="headr-clearlink" >
					<div className="header_option">
						<span className="header_optionLineOne">Return</span>
						<span className="header_optionLineTwo"> Oreders</span>
					</div>
				</Link>

				<div className="header_option">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo"> Prime </span>
				</div>
				<Link to="/Checkout" className="headr-clearlink">
					<div className="header_optionBasket">
						<ShoppingBasketIcon />
						<span className="header_optionLineTwo header_basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
