import { Box } from "@mui/system";
import { React, useState } from "react";
import styles from './AdminCreateNewProduct.styles'
import { Container, Typography, Button, Divider, Modal } from "@mui/material";
import FormProduct from "../../components/FormProduct/FormProduct";
import { createProduct } from "../../api/productApi";
import { userInfoSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import NotFound from "../../components/NotFound/NotFound";
import { checkEmptyForm, checkNotNegative } from "../../constant/function";
const defaultemptyProduct = {
	productID: 0,
	type: "",
	description: "",
	spec: "",
	name: "",
	price: 0,
	rating: 0,
	sold: 0,
	img1: "",
	img2: "",
	img3: "",
	img4: "",
};

const AdminCreateNewProduct = () => {
	const [productForm, setProductForm] = useState(defaultemptyProduct);
	const { userRole } = useSelector(userInfoSelector);
	const history = useHistory()

	function handleSubmit() {
		if (checkEmptyForm(productForm, ["img2", "img3", "img4", 'sold', 'rating', 'spec', 'description'])) {
			if (checkNotNegative(productForm, ["price"])) {
				createProduct(productForm).then((response) => {
					if ((response.data.success = true)) {
						console.log(response.data);
						const productURL =
							'/product/' +
							encodeURIComponent(productForm.name).replace(/%20/g, '-') +
							`?i=${response.data.data}`;
						history.push(productURL)
						setProductForm(defaultemptyProduct);
					}
				});
			} else {
				console.log("negative field");
			}
		} else {
			console.log("empty field");
			alert("A field is empty")
		}
	}
	return (
		<>
			{userRole == 0 ? (
				<Box sx={styles.box}>
					<Typography sx={styles.title}>Create New Product</Typography>
					<Container maxWidth="md">
						<FormProduct
							form={productForm}
							setProduct={setProductForm}
							handleSubmit={handleSubmit}
							cancelBtnAppear={false}
						/>
					</Container>
				</Box>
			) : (
				<NotFound />
			)}
		</>
	);
};

export default AdminCreateNewProduct;
