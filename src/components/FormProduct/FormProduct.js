import { React, useState } from "react";
import { useHistory } from 'react-router-dom'
import styles from './FormProduct.styles'
import {
	Button,
	FormControl,
	Box,
	TextField,
	Container,
	InputAdornment,
	MenuItem,
	Select,
	Typography,
	InputLabel,
} from "@mui/material";

function setDefault(e) {
	console.log(e);
}

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const category = ["CPU", "Case", "Gaming Chair", "Headphone", "Keyboard", "Laptop", "Mainboard","Monitor", "Mouse", "PSU", "RAM", "SSD", "Speaker", "VGA"];
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
				<Box sx = {{position: "relative"}}>
					<InputLabel id="zzzz">Category</InputLabel>

					<Select
						placeholder="Category"
						labelId="zzzz"
						sx={styles.textField}
						id="demo-simple-select"
						value={form.type}
						label="Category"
						MenuProps={MenuProps}
						onChange={(e) => {
							setProduct({ ...form, type: e.target.value })
						}}
					>
						{category.map(item => {
							let value = item.replace(" ", "");
							return (
								<MenuItem value={value}>{item}</MenuItem>
							)
						})}
					</Select>
				</Box>
				<TextField
					sx={styles.textField}
					name="price"
					label="Price"
					type="tel"
					placeholder="Product price"
					onChange={(e) => {
						let value = e.target.value.replace(/[^0-9]/g, '');

						setProduct({ ...form, price: value })
					}}
					InputProps={{
						endAdornment: <Typography>VND</Typography>
					}}
					value={form.price}
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
				<TextField
					style={{ textAlign: 'left', background: "white" }}
					multiline
					rows={5}
					value={form.spec}
					placeholder="Product specification"
					onChange={(e) =>
						setProduct({ ...form, spec: e.target.value })
					}
				/>
				<Typography sx={{ pb: 1, pt: 2 }}>
					Description
				</Typography>
				<TextField
					style={{ textAlign: 'left', background: "white" }}
					multiline
					rows={5}
					placeholder="Product description"

					value={form.description}
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
