export function checkStatus(
	eeiuApproved,
	submit,
	nominated,
	nominated2,
	endorsed,
	approved
) {
	if (
		eeiuApproved == false &&
		submit == true &&
		nominated == false &&
		nominated2 == true &&
		endorsed == false &&
		approved == false
	)
		return "EEIU";
	else if (
		eeiuApproved == true &&
		submit == true &&
		nominated == false &&
		nominated2 == true &&
		endorsed == false &&
		approved == false
	)
		return "Submit";
	else if (
		eeiuApproved == true &&
		submit == true &&
		nominated == true &&
		nominated2 == true &&
		endorsed == false &&
		approved == false
	)
		return "Nominate";
	else if (
		eeiuApproved == true &&
		submit == true &&
		nominated == true &&
		nominated2 == true &&
		endorsed == true &&
		approved == false
	)
		return "Endorse";
	else if (
		eeiuApproved == true &&
		submit == true &&
		nominated == true &&
		nominated2 == true &&
		endorsed == true &&
		approved == true
	)
		return "Approve";
	else return "Draft";
}
