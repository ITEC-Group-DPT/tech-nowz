import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormAddress from "../PaymentFormAddress/PaymentFormAddress";
import HorizontalProduct from "../HorizontalProduct/HorizontalProduct";
import { createOrder } from "../../api/orderApi";
import { Container, Box, Divider } from "@mui/material";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { removeAllCart } from "../../store/actions/cartAction";
import { checkEmptyForm } from "../../constant/function";

const steps = ["Delivery Information", "Checkout List", "Finish"];
export default function PaymentStepper({
	idaddress,
	address,
	setAddress,
	setDisableAddress,
	cart,
}) {
	const history = useHistory();
	const dispatch = useDispatch();
	const [activeStep, setActiveStep] = React.useState(0);
	const [disableFinish, setDisableFinish] = React.useState(false);
	if (activeStep != 0) {
		setDisableAddress(true);
	} else {
		setDisableAddress(false);
	}

	const handleNext = () => {
		if (activeStep == 0) {
			console.log(address);
			if (checkEmptyForm(address)) setActiveStep(activeStep + 1);
			else {
				console.log('empty input');
				return;
			}
		} else if (activeStep == 1) {
			setDisableFinish(true);
			let joinAddress =
				address.addressInForm +
				", " +
				address.ward +
				", " +
				address.district +
				", " +
				address.city;
			// console.log("da gui");
			let productIDs = [];
			for (const product of cart.cartList) {
				let arr = [product.productID, product.quantity, product.price];
				productIDs.push(arr);
			}

			createOrder(
				idaddress,
				address.name,
				joinAddress,
				address.phone,
				cart.totalPrice,
				productIDs
			).then((res) => {
				//console.log(res.data);
				if (res.data.success == true) {
					dispatch(removeAllCart());
					setActiveStep(activeStep + 1);
				}
			});
		} else setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<Container sx={{ pb: "40px" }}>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps = {};
					const labelProps = {};
					if (index == 0) {
						labelProps.optional = (
							<Typography variant="caption">
								You can edit your address here
							</Typography>
						);
					}
					return (
						<Step key={label} {...stepProps}>
							<StepLabel
								{...labelProps}
							>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length - 1 ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						Your order has been submitted
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							pt: 2,
						}}>
						<Button
							onClick={() => history.push("/")}
							variant="outlined">
							Back to home page
						</Button>
					</Box>
				</React.Fragment>
			) : (
				<Container>
					<React.Fragment>
						{activeStep == 0 ? (
							<FormAddress
								form={address}
								setChosenAddress={setAddress}
							/>
						) : (
							<Box sx={{
								my: 2,
								display: {
									xs: "block",
									md: "flex"
								}
							}}>
								<Box>
									<Typography
										sx={{
											fontSize: "18px",
											fontWeight: "bold",
											fontFamily: "Roboto Slab",
											mb: "12px",
										}}
									>Cart Details</Typography>
									{cart["cartList"].map((product) => (
										<>
											<HorizontalProduct
												imageSize={"15%"}
												product={product}
												noQuantityChange={true}
											/>
											<Divider />
										</>
									))}
								</Box>

								<Box
									sx={{
										ml:
										{
											xs: 0,
											md: "5%"
										},
										mt: {
											xs: "24px",
											md: "0",
										},
										width: {
											xs: "fit-content",
											md: "45%",
										},
									}}
								>
									<Typography
										sx={{
											fontSize: "18px",
											fontWeight: "bold",
											fontFamily: "Roboto Slab",
										}}
									>Bill Details</Typography>
									<Box
										sx={{
											p: 2,
											mt: 2,
											border: 1,
											borderRadius: 3,
										}}>
										<Typography
											sx={{ fontSize: { xs: "1rem" } }}>
											<b>Total quantity:</b> {cart.totalQuantity}
											{" unit(s)"}
										</Typography>
										<Typography
											sx={{ fontSize: { xs: "1rem" } }}>
											<b>Total price:</b>{" "}
											{Intl.NumberFormat("vi-VN", {
												style: "currency",
												currency: "VND",
											}).format(cart.totalPrice)}
										</Typography>
									</Box>

									<Typography
										sx={{
											fontSize: "18px",
											fontWeight: "bold",
											fontFamily: "Roboto Slab",
											mt: 3,
										}}
									>Delivery Info</Typography>
									<Box
										sx={{
											p: 2,
											mt: 2,
											border: 1,
											borderRadius: 3,
										}}>
										<Typography
											sx={{ fontSize: { xs: "1rem" } }}>
											<b>Receiver's name:</b> {address.name}
										</Typography>
										<Typography
											sx={{ fontSize: { xs: "1rem" } }}>
											<b>Address:</b> {
												address.addressInForm +
												", Ward " +
												address.ward +
												", District " +
												address.district +
												", " +
												address.city
											}
										</Typography>
										<Typography
											sx={{ fontSize: { xs: "1rem" } }}>
											<b>Phone Number:</b> {address.phone}
										</Typography>
									</Box>
								</Box>
							</Box>
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
								disabled={activeStep === 0 || disableFinish}
								onClick={handleBack}
								sx={{ mr: 1 }}>
								Back
							</Button>
							<Box sx={{ flex: "1 1 auto" }} />

							<Button
								onClick={handleNext}
								disabled={disableFinish}
								variant="outlined">
								{activeStep === steps.length - 2
									? "Finish"
									: "Next"}
							</Button>
						</Box>
					</React.Fragment>
				</Container>
			)}
		</Container>
	);
}
