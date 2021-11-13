/** @format */
import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import { useState, useEffect } from "react";

const CalendarComponent = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleClick = () => {};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	return (
		<Wrapper className='max-w-[600px] mx-auto flex flex-col col-span-3 mt-8  transition'>
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={handleSelect}
				minDate={new Date()}
				rangeColors={["#fd5b61"]}
			/>
		</Wrapper>
	);
};

export default CalendarComponent;

const Wrapper = styled.div`
	margin: 3rem 0;
`;
