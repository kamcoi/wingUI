export function validateDate(travelFrom, travelUntil) {
	return travelUntil.valueOf() < travelFrom.valueOf();
}

export function validateCost(cost, budget) {
	return parseInt(cost) > parseInt(budget);
}

export function validatePosition(value) {
	if (
		value === "AGM and below" ||
		value === "Head of Finance/ Business Controllers" ||
		value === "AGM/ AVP/ Senior Manager & Below(Subsidiaries)"
	) {
		return true;
	} else false;
}

export function enableButton(
	destination,
	travelType,
	travelFrom,
	travelUntil,
	justification,
	cost,
	budget,
	costCategory,
	costCentre,
	nominatorName,
	endorserName,
	approverName
) {
	return (
		destination.length > 0 &&
		travelType.length > 0 &&
		travelFrom.length > 0 &&
		travelUntil.length > 0 &&
		justification.length > 0 &&
		cost.length > 0 &&
		budget.length > 0 &&
		costCategory.length > 0 &&
		nominatorName.length > 0 &&
		endorserName.length > 0 &&
		approverName.length > 0
	);
}
