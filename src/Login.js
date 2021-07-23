import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
	const [{}, dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login_container">
				<img
					src="https://static.wixstatic.com/media/38e811_a535f3ad378442f78180828cb927dd7b~mv2.png/v1/fill/w_500,h_176,al_c,q_85,usm_0.66_1.00_0.01/letschat.webp"
					alt=""
				/>
				<div className="login_text">
					<h1 className="text">Sign in to Lets Chat</h1>
				</div>
				<Button type="submit" onClick={signIn}>
					Sign in With Google
				</Button>
			</div>
		</div>
	);
}

export default Login;
