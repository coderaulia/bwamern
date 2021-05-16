import React, { useState } from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
	//destructuring props
	const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
		props;

	// setting function untuk menambahkan prefix dan suffix otomatis
	const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

	//fungsi onchange data
	const onChange = (e) => {
		//cek jika valuenya string
		let value = String(e.target.value);
		if (prefix) value = value.replace(prefix);
		if (suffix) value = value.replace(suffix);

		//cek pake regex
		const patternNumeric = new RegExp("[0-9]*");
		const isNumeric = patternNumeric.test(value);

		//cek jika bener2 numeric, dan valuenya tidak lebih kecil/lebih besar dari max & min
		if (isNumeric && +value <= max && +value >= min) {
			props.onChange({
				target: {
					name: name,
					value: +value,
				},
			});
			setInputValue(
				`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
			);
		}
	};

	// fungsi mengurangi hari
	const minus = () => {
		value > min &&
			onChange({
				target: {
					name: name,
					value: +value - 1,
				},
			});
	};

	//fungsi menambahkan hari
	const plus = () => {
		value < max &&
			onChange({
				target: {
					name: name,
					value: +value + 1,
				},
			});
	};

	return (
		<div className={["input-number mb-3", props.outerClassName].join(" ")}>
			<div className="input-group">
				<div className="input-group-prepend ">
					<span className="input-group-text minus" onClick={minus}>
						-
					</span>
				</div>
				<input
					min={min}
					max={max}
					name={name}
					pattern="[0-9]*"
					className="form-control"
					placeholder={placeholder ? placeholder : "0"}
					value={String(InputValue)}
					onChange={onChange}
				/>
				<div className="input-group-append">
					<span className="input-group-text plus" onClick={plus}>
						+
					</span>
				</div>
			</div>
		</div>
	);
}

// default value jika tidak didefinisikan saat penggunaan
Number.defaultProps = {
	min: 1,
	max: 1,
	prefix: "",
	suffix: "",
};

//setting proptypes
Number.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	isSuffixPlural: propTypes.bool,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
