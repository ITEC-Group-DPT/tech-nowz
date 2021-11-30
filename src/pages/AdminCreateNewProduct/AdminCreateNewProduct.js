import { Box } from "@mui/system";
import { React, useState } from "react";
import styles from './AdminCreateNewProduct.styles'
import { Container, Typography, Button, Divider, Modal } from "@mui/material";
import FormProduct from "../../components/FormProduct/FormProduct";
import { createProduct } from "../../api/productApi";
import { userInfoSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound/NotFound";
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
		createProduct(productForm).then((response) => {
			if (response.data.success = true) {
				console.log(response.data);
				setProductForm(defaultemptyProduct);
			}
		});
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
			) :
				<NotFound />
			}
		</>
	);
};

export default AdminCreateNewProduct;
