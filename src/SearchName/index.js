import React from "react";
import SearchName from "./SearchName";

import { gems } from "../Data";

const SearchNameIndex = () => {
	return (
		<SearchName
			gems={gems}
			addStaff={({ id, staffName, staffDivision }) =>
				console.log({ id, staffName, staffDivision })
			}
		/>
	);
};

export default SearchNameIndex;
