import React from "react";
import Form from "./Form";

import { user, request } from "../Data";

const FormIndex = () => {
	return (
		<Form
			fillRequest={({
				requestorName,
				requestorDivision,
				staffs,
				destination,
				travelType,
				travelFrom,
				travelUntil,
				justification,
				cost,
				budget,
				costCategory,
				costCentre,
				eeiuApproved,
				nominated2,
				requestorPosition,
				nominator2Name,
				nominatorName,
				endorserName,
				approverName
			}) =>
				console.log({
					requestorName,
					requestorDivision,
					staffs,
					destination,
					travelType,
					travelFrom,
					travelUntil,
					justification,
					cost,
					budget,
					costCategory,
					costCentre,
					eeiuApproved,
					nominated2,
					requestorPosition,
					nominator2Name,
					nominatorName,
					endorserName,
					approverName
				})
			}
			user={user}
			request={request[0]}
		/>
	);
};

export default FormIndex;
