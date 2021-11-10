import { Box } from "@mui/system";
import { React, useState } from "react";
import { Container, Typography, Button, Divider, Modal } from "@mui/material";
import FormProduct from "../../components/FormProduct/FormProduct";

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
	function handleSubmit(){
		console.log(productForm);
	}
	return (
		<div>
			<Box sx={{ textAlign: "center", py: 10, bgcolor: "#e9ecef" }}>
				<Typography
					variant="h1"
					sx={{
						fontWeight: "500",
						fontSize: { xs: "50px", md: "80px", lg: "100px" },
					}}
					component="div">
					Create New Product
				</Typography>
			</Box>

			<Container >
				<FormProduct form={productForm} setProduct={setProductForm} handleSubmit={handleSubmit} cancelAppear={false} />
			</Container>
		</div>
	);
};

export default AdminCreateNewProduct;
