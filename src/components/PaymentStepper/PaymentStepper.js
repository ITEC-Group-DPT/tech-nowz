import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormAddress from "../PaymentFormAddress/PaymentFormAddress";
import HorizontalProduct from "../HorizontalProduct/HorizontalProduct";
import { Container, Box, Divider } from "@mui/material";
const steps = ["Delivery Information", "Checkout List", "Finish"];

export default function PaymentStepper({
	address,
	setAddress,
	setDisableAddress,
	cartList,
}) {
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());
	React.useEffect(() => {
		if (activeStep != 0) {
			console.log(activeStep);
			setDisableAddress(true);
		} else {
			console.log(activeStep);
			setDisableAddress(false);
		}
	}, [activeStep]);
	const isStepOptional = (step) => {
		return step === 1;
	};
	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		console.log(activeStep);
		if (activeStep === 0) console.log(address);
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ maxWidth: "90%", mx: "auto", my: 5 }}>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps = {};
					const labelProps = {};
					if (index == 0) {
						labelProps.optional = (
							<Typography variant="caption">dasd</Typography>
						);
					}
					if (isStepSkipped(index)) {
						stepProps.completed = false;
					}
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you're finished
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : (
				<Container>
					<React.Fragment>
						{/* <Typography sx={{ mt: 2, mb: 1 }}>
							Step {activeStep + 1}
						</Typography> */}
						{activeStep == 0 ? (
							<FormAddress
								form={address}
								setChosenAddress={setAddress}
							/>
						) : activeStep == 1 ? (
							<div>
								{cartList["cartList"].map((product) => (
									<HorizontalProduct
										product={product}
										noQuantityChange={true}
									/>
								))}

								<Box
									sx={{
										width: "fit-content",
										p: 2,
										mt: 2,
										ml:'auto',
										border: 1,
										borderRadius: 3,
									}}>
									<Typography variant="h6" sx={{fontSize:{xs:'1rem'}}}> 
										Total price: {cartList.totalQuantity}
										{" unit(s)"}
									</Typography>
									<Typography variant="h6" sx={{fontSize:{xs:'1rem'}}}>
										Total price:{" "}
										{Intl.NumberFormat("vi-VN", {
											style: "currency",
											currency: "VND",
										}).format(cartList.totalPrice)}
									</Typography>
								</Box>
							</div>
						) : (
							<h1>finish</h1>
						)}

						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								pt: 2,
							}}>
							<Button
								variant="outlined"
								color="inherit"
								disabled={activeStep === 0 || activeStep === 2}
								onClick={handleBack}
								sx={{ mr: 1 }}>
								Back
							</Button>
							<Box sx={{ flex: "1 1 auto" }} />

							<Button onClick={handleNext} variant="outlined">
								{activeStep === steps.length - 2
									? "Finish?"
									: activeStep === steps.length - 1
									? "Back to Homepage"
									: "Next"}
							</Button>
						</Box>
					</React.Fragment>
				</Container>
			)}
		</Box>
	);
}
