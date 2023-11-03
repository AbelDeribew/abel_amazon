import './App.css';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const promise = loadStripe(
	"pk_test_51O7FSALuKUp1VynhpjcGG6hfZZv7oF6YPlYO0M3qxUSyCFkANCtIgsu1X8lJbTX4WcbAilqRJTYHzstQH8hR0DIU00CiYAEPoQ"
);


function App() {
       const [{}, dispatch] = useStateValue();

				useEffect(() => {
					auth.onAuthStateChanged((userauth) => {
						// console.log(userauth);
						if (userauth) {
							dispatch({
								type: "SET_USER",
								user: userauth,
							});
						} else {
							dispatch({
								type: "SET_USER",
								user: null,
							});
						}
					});
				}, []);
return (
	<Router>
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
							{/* <Footer /> */}
						</>
					}
				/>
				<Route
					path="/Checkout"
					element={
						<>
							<Header />
							<Checkout />
							{/* <Footer /> */}
						</>
					}
				/>
				<Route
					path="/payment"
					element={
						<>
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						</>
					}
				/>
				<Route
					path="/orders"
					element={
						<>
							<Header />

							<Orders />

							{/* <Footer /> */}
						</>
					}
				/>
			</Routes>
		</div>
	</Router>
);
}

export default App;
