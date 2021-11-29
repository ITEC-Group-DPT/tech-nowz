import { React, useState } from "react";
import { useHistory } from 'react-router-dom'
import styles from './FormProduct.styles'
import {
	Input,
	InputLabel,
	Button,
	FormControl,
	FormHelperText,
	Box,
	TextField,
	Container,
	TextareaAutosize,
	Typography,
} from "@mui/material";

function setDefault(e) {
	console.log(e);
}

const FormProduct = ({
	form,
	setProduct,
	handleSubmit,
	cancelBtnAppear = true,
	setAppear = setDefault,
}) => {
	const history = useHistory()
	return (
		<Box sx={styles.box}>
			<FormControl fullWidth="true">
				<TextField
					sx={styles.textField}
					name="name"
					label="Name"
					onChange={(e) =>
						setProduct({ ...form, name: e.target.value })
					}
					placeholder="Product name"
					value={form.name}
					variant="outlined"
				/>
				<TextField
					sx={styles.textField}
					name="type"
					label="Category"
					onChange={(e) =>
						setProduct({
							...form,
							type: e.target.value,
						})
					}
					placeholder="Product category"
					value={form.type}
					variant="outlined"
				/>
				<TextField
					sx={styles.textField}
					name="price"
					label="Price"
					type="number"
					placeholder="Product price"
					onChange={(e) =>
						setProduct({ ...form, price: e.target.value })
					}
					value={form.price}
					variant="outlined"
				/>

				{/* <TextField
					sx={{ mb: 2 }}
					name="spec"
					label="Specification"
					placeholder="Type Specification here"
					onChange={(e) =>
						setProduct({ ...form, spec: e.target.value })
					}
					value={form.spec}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="des"
					label="Description"
					placeholder="Type description here"
					onChange={(e) =>
						setProduct({
							...form,
							description: e.target.value,
						})
					}
					value={form.description}
					variant="standard"
					required
				/> */}
				<TextField
					sx={styles.textField}
					name="rating"
					type="number"
					label="Rating"
					placeholder="Product rating"
					onChange={(e) =>
						setProduct({ ...form, rating: e.target.value })
					}
					value={form.rating}
					variant="outlined"
				/>
				<TextField
					sx={styles.textField}
					name="sold"
					type="number"
					label="Amount of product sold"
					placeholder="Product sold amount"
					onChange={(e) =>
						setProduct({ ...form, sold: e.target.value })
					}
					value={form.sold}
					variant="outlined"
				/>

				<TextField
					sx={styles.textField}
					name="img1"
					label="Image 1"
					placeholder="Product image 1 url"
					onChange={(e) =>
						setProduct({ ...form, img1: e.target.value })
					}
					value={form.img1}
					variant="outlined"
				/>

				<TextField
					sx={styles.textField}
					name="img2"
					label="Image 2"
					placeholder="Product image 2 url"
					onChange={(e) =>
						setProduct({ ...form, img2: e.target.value })
					}
					value={form.img2}
					variant="outlined"
				/>

				<TextField
					sx={styles.textField}
					name="img3"
					label="Image 3"
					placeholder="Product image 3 url"
					onChange={(e) =>
						setProduct({ ...form, img3: e.target.value })
					}
					value={form.img3}
					variant="outlined"
				/>

				<TextField
					sx={styles.textField}
					name="img4"
					label="Image 4"
					placeholder="Product image 4 url"
					onChange={(e) =>
						setProduct({ ...form, img4: e.target.value })
					}
					value={form.img4}
					variant="outlined"
				/>

				<Typography sx={{ pb: 1 }}>
					Specification
				</Typography>
				<TextareaAutosize
					maxRows={4}
					minRows={3}
					placeholder="Product specification"
					value={form.spec}
					sx={{ width: "100%" }}
					onChange={(e) =>
						setProduct({ ...form, spec: e.target.value })
					}
				/>
				<Typography sx={{ pb: 1, pt: 2 }}>
					Description
				</Typography>
				<TextareaAutosize
					maxRows={4}
					minRows={3}
					placeholder="Product description"
					value={form.description}
					sx={{ width: "100%" }}
					onChange={(e) =>
						setProduct({ ...form, description: e.target.value })
					}
				/>
			</FormControl>
			<Container sx={{ textAlign: "center", my: 3 }}>
				{cancelBtnAppear && (
					<Button
						sx={styles.cancelBtn}
						onClick={() => { history.goBack() }}
					>
						Cancel
					</Button>
				)}
				<Button
					sx={styles.submitBtn}
					onClick={handleSubmit}
					type="submit"
				>
					Submit
				</Button>
			</Container>
		</Box>
	);
};

export default FormProduct;
