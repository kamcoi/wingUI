import React from "react";
import Summary from "./Summary";

import { user, request } from "../Data";

const SummaryIndex = () => {
	return (
		<Summary
			submitRequest={({ approved }) =>
				console.log({
					approved
				})
			}
			user={user}
			request={request[0]}
		/>
	);
};

export default SummaryIndex;
