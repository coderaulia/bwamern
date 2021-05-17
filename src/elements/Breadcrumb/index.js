import React from "react";

import propTypes from "prop-types";
import Button from "elements/Button";

import "./index.scss";

export default function Breadcrumb(props) {
	const className = ["breadcrumb", props.className];
	return (
		<nav aria-label="breadcrumb">
			<ol className={className.join(" ")}>
				{props.data.map((item, index) => {
					return (
						// jika panjang index data array terakhir maka ada class active
						<li
							className={`breadcrumb-item${
								index === props.data.length - 1 ? " active" : ""
							}`}
							key={`breadcrumb-${index}`}
						>
							{/* jika panjang index data array habis dikurang 1, maka tampilkan page title, jika tidak maka render button link */}
							{index === props.data.length - 1 ? (
								item.pageTitle
							) : (
								<Button type="link" href={item.pageHref}>
									{item.pageTitle}
								</Button>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}

Breadcrumb.propTypes = {
	data: propTypes.array,
	className: propTypes.string,
};
