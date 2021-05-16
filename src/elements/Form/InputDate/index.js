import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/icon-calendar.svg";

export default function Date(props) {
	const { value, placeholder, name } = props;
	//toggle wrapper datepicker
	const [isShowed, setIsShowed] = useState(false);

	const datePickerChange = (value) => {
		const target = {
			target: {
				value: value.selection,
				name: name,
			},
		};
		props.onChange(target);
	};

	//jika diklik akan menutup kalender
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	// penggunaan useref
	const refDate = useRef(null);
	// fungsi cek date udah keisi atau belum
	const handleClickOutside = (event) => {
		if (refDate && !refDate.current.contains(event.target)) {
			setIsShowed(false);
		}
	};

	// mengecek nilai kembali array => showed=false
	const check = (focus) => {
		focus.indexOf(1) < 0 && setIsShowed(false);
	};

	// mengecek start & end date dan melakukan formatting (formatDate)
	const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
		value.endDate ? " - " + formatDate(value.endDate) : ""
	}`;

	return (
		<div
			//ref not null
			ref={refDate}
			className={["input-date mb-3", props.outerClassName].join(" ")}
		>
			<div className="input-group">
				<div className="input-group-prepend bg-gray-900">
					<span className="input-group-text">
						<img src={iconCalendar} alt="icon" />
					</span>
				</div>
				<input
					type="text"
					readOnly
					className="form-control"
					value={displayDate}
					placeholder={placeholder}
					onClick={() => setIsShowed(!isShowed)}
				/>

				{/* jika diklik maka wrapper akan muncul */}
				{isShowed && (
					<div className="date-range-wrapper">
						<DateRange
							editableDateInputs={true}
							onChange={datePickerChange}
							moveRangeOnFirstSelection={false}
							onRangeFocusChange={check}
							ranges={[value]}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

Date.propTypes = {
	value: propTypes.object,
	onChange: propTypes.func,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
