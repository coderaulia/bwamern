import React, { Component } from "react";

import Header from "parts/Header";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import Stepper, {
	Numbering,
	Meta,
	MainContent,
	Controller,
} from "elements/Stepper";

import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails.json";

export default class Checkout extends Component {
	render() {
		return (
			<>
				<Header isCentered />
			</>
		);
	}
}
