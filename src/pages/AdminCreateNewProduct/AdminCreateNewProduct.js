import { Box } from "@mui/system";
import { React, useState } from "react";
import { Container, Typography, Button, Divider, Modal } from "@mui/material";
import FormProduct from "../../components/FormProduct/FormProduct";
import { createProduct } from "../../api/productApi";
import { userInfoSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound/NotFound";
import checkEmptyForm from "../../constant/function";
const defaultemptyProduct = {
	productID: 0,
	type: "",
	description: "",
	spec: "",
	name: "",
	price: 0,
	rating: 0,
	sold: 0,
	dateCreated: "",
	img1: "",
	img2: "",
	img3: "",
	img4: "",
};

const AdminCreateNewProduct = () => {
	const [productForm, setProductForm] = useState(defaultemptyProduct);
	const { userRole } = useSelector(userInfoSelector);

	function handleSubmit() {
		if (checkEmptyForm(productForm, ["img2", "img3", "img4"])) {
			createProduct(productForm).then((response) => {
				if ((response.data.success = true)) {
					console.log(response.data);
					setProductForm(defaultemptyProduct);
				}
			});
		}
		else {
			console.log("empty field");
			// process alert here
		}
	}
	return (
		<div>
			{userRole == 0 ? (
				<div>
					<Box
						sx={{
							textAlign: "center",
							py: 10,
							bgcolor: "#e9ecef",
						}}>
						<Typography
							variant="h1"
							sx={{
								fontWeight: "500",
								fontSize: {
									xs: "50px",
									md: "80px",
									lg: "100px",
								},
							}}
							component="div">
							Create New Product
						</Typography>
					</Box>

					<Container>
						<FormProduct
							form={productForm}
							setProduct={setProductForm}
							handleSubmit={handleSubmit}
							cancelBtnAppear={false}
						/>
					</Container>
				</div>
			) : (
				<NotFound />
			)}
		</div>
	);
};

export default AdminCreateNewProduct;
