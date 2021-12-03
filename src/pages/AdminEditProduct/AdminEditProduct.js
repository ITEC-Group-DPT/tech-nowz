import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import FormProduct from "../../components/FormProduct/FormProduct";
import { editProduct } from "../../api/productApi";
import { Container, Typography, Box } from "@mui/material";
import styles from "./AdminEditProduct.styles";
import { checkEmptyForm, checkNotNegative } from "../../constant/function";
import NotFound from "../../components/NotFound/NotFound";

const AdminEditProduct = () => {
	const location = useLocation();
	const history = useHistory();
	console.log(location.state);

	const [productForm, setProductForm] = useState(location.state);

	function submitEditForm() {
		if (checkEmptyForm(productForm, ["img2", "img3", "img4",'sold','rating',"spec", "description"])) {
			if (checkNotNegative(productForm, ["price"])) {
				editProduct(productForm, productForm.productID).then(
					(response) => {
						if (response.data.success == true) {
							history.goBack();
							// setProduct({
							// 	...product,
							// 	product: productForm,
							// });
						}
					}
				);
			} else {
				console.log("negative field");
			}
		} else {
			console.log("empty field");
			// process alert here
		}
	}

	return (
		<>
			{productForm ? (
				<Box sx={styles.box}>
					<Typography sx={styles.title}>Edit Product</Typography>
					<Container maxWidth="md">
						<FormProduct
							form={productForm}
							setProduct={setProductForm}
							handleSubmit={submitEditForm}
						/>
					</Container>
				</Box>
			) : (
				<NotFound />
			)}
		</>
	);
};

export default AdminEditProduct;
