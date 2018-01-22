import React from "react";
import Home from "./Home";

import { user, request, task } from "../Data";

const HomeIndex = () => {
	return (
		<Home
			newRequest={({ id }) => console.log({ id })}
			task={task}
			user={user}
			request={request}
		/>
	);
};

export default HomeIndex;
