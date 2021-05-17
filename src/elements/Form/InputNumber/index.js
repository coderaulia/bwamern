import React from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
	//destructuring props
	const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
		props;

	//fungsi onchange data
	const onChange = (e) => {
		//cek jika valuenya string
		let value = String(e.target.value);

		//cek jika bener2 numeric, dan valuenya tidak lebih kecil/lebih besar dari max & min
		if (+value <= max && +value >= min) {
			props.onChange({
				target: {
					name: name,
					value: +value,
				},
			});
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
					readOnly
					className="form-control"
					placeholder={placeholder ? placeholder : "0"}
					value={`${prefix}${value}${suffix}${
						isSuffixPlural && value > 1 ? "s" : ""
					}`}
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
