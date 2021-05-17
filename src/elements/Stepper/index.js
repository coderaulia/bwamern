import React, { useState } from "react";

import propTypes from "prop-types";

export default function Stepper(props) {
	const { steps, initialStep } = props;

	// merubah objek menjadi array
	const stepsKeys = Object.keys(steps);

	// mengecek initial step, jika ada maka initialstep dari user, jika tidak ada maka ubah menjadi default [0]
	const [CurrentStep, setCurrentStep] = useState(
		stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
	);
	//hasil dari steps, jumlah panjangnya
	const totalStep = stepsKeys.length;
	// cari berdasarkan currentstep yg lagi aktif
	const indexStep = stepsKeys.indexOf(CurrentStep);

	function prevStep() {
		if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
	}

	function nextStep() {
		if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
	}

	return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
	data: propTypes.object.isRequired,
	initialStep: propTypes.string,
};
