import React from "react";
import Login from "./Login";

const LoginIndex = () => {
	return (
		<Login
			onSubmit={({ userId, password }) => console.log({ userId, password })}
		/>
	);
};

export default LoginIndex;
