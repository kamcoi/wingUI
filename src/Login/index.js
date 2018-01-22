import React from "react";
import Login from "./Login";

const LoginIndex = () => {
	return (
		<Login
			onSubmit={({ staffID, authentication }) =>
				console.log({ staffID, authentication })
			}
		/>
	);
};

export default LoginIndex;
