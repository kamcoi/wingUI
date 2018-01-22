import React from "react";
import Summary from "./Summary";

import { user, request } from "../Data";

const SummaryIndex = () => {
	return (
		<Summary
			submitRequest={({
				eeiuApproved,
				nominated,
				nominated2,
				endorsed,
				approved,
				submit
			}) =>
				console.log({
					eeiuApproved,
					nominated,
					nominated2,
					endorsed,
					approved,
					submit
				})
			}
			user={user}
			request={request[0]}
		/>
	);
};

export default SummaryIndex;

export function validateCaption(request, user) {
	if (request.nominatorName == user.name || request.nominator2Name == user.name)
		return "Nominate";
	else if (request.endorserName == user.name) return "Endorse";
	else if (request.approverName == user.name || request.eeiuName == user.name)
		return "Approve";
	else null;
}

export function validateAuth(request, user) {
	if (request.eeiuName == user.name) return { eeiuApproved: true };
	else if (request.nominatorName == user.name) return { nominated: true };
	else if (request.nominator2Name == user.name) return { nominated2: true };
	else if (request.endorserName == user.name) return { endorsed: true };
	else if (request.approverName == user.name) return { approved: true };
	else null;
}

export function revertAuth(request, user) {
	if (request.eeiuName == user.name || request.nominatorName == user.name)
		return {
			submit: false
		};
	else if (request.nominator2Name == user.name) return { nominated: false };
	else if (request.endorserName == user.name)
		return { nominated: false, nominated2: false };
	else {
		endorsed: false;
	}
}

export function turnApprove(request, user) {
	if (request.eeiuName == user.name && request.submit == true) return true;
	else if (request.nominatorName == user.name && request.eeiuApproved == true)
		return true;
	else if (request.nominator2Name == user.name && request.eeiuApproved == true)
		return true;
	else if (
		request.endorserName == user.name &&
		request.nominated2 == true &&
		request.nominated == true
	)
		return true;
	else if (request.approverName == user.name && request.endorsed == true)
		return true;
	else return false;
}
