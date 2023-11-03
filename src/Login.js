import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential) navigate("/");
			})
			.catch((error) => alert(error.message));
	};
	const register = (e) => {
		e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						if (userCredential) navigate("/");
					})
					.catch((error) => {
						const errorMessage = error.message;
						alert(errorMessage);
					});
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__image"
					src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
					alt="amazon"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5 className="login__label">Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={signIn}
						className="login__signinButton"
					>
						Sign in
					</button>
				</form>
				<p className="login__terms">
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>

				<button onClick={register} className="login__signupButton">
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
