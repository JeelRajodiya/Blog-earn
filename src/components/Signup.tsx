import * as React from "react";
import "../styles/login.css";
import Signup from "../assets/Signup.png";
import userIcon from "../assets/userIcon.png";
import passwordIcon from "../assets/passwordIcon.png";
import emailIcon from "../assets/email.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login1() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const performLogin = async (email: string, password: string) => {
		const http = await fetch("http://10.1.162.162:3430/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nam: name,
				email: email,
				pwdd: password,
			}),
		});
		const data = await http.json();
		console.log(data);
	};

	return (
		<main id="login">
			<img src={Signup} alt="Login Icon" />
			<h1 id="motto">Be A Part Blog Earn </h1>
			<div className="login-input-block">
				<img src={emailIcon} alt="User Icon" />

				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="login-input"
					placeholder="Enter your Email"
				/>
			</div>
			<div className="login-input-block">
				<img src={userIcon} alt="User Icon" />
				<input
					className="login-input"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter your Name"
				/>
			</div>
			<div className="login-input-block">
				<img src={passwordIcon} alt="User Icon" />

				<input
					value={password}
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					className="login-input"
					placeholder="Enter your password"
				/>
			</div>
			<button
				id="login-button"
				onClick={() => {
					performLogin(email, password);
				}}
			>
				SendOTP
			</button>
			Have An Account?
			<Link to="/">Login</Link>
		</main>
	);
}
