import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
	// jika ada di laman lain maka berubah titlenya (dynamic title)
	componentDidMount() {
		window.title = "Details Page";
		window.scrollTo(0, 0);
	}

	render() {
		const breadcrumb = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "House Details", pageHref: "" },
		];

		return (
			<>
				<Header {...this.props}></Header>
				{/* mengambil data dari json detail page */}
				<PageDetailTitle
					breadcrumb={breadcrumb}
					data={ItemDetails}
				></PageDetailTitle>
				<FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
			</>
		);
	}
}
