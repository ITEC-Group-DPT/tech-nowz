import { React, useState } from "react";
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
function setDefault(e){
	console.log(e);
}
const FormProduct = ({
	form,
	setProduct,
	handleSubmit,
	cancelBtnAppear = true,
	setAppear = setDefault,
}) => {
	return (
		<Box sx={{ p: 2, my: 1 }}>
			<FormControl fullWidth="true">
				<TextField
					sx={{ mb: 2 }}
					name="name"
					label="Name"
					onChange={(e) =>
						setProduct({ ...form, name: e.target.value })
					}
					placeholder="Type product name here"
					value={form.name}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="type"
					label="Catalogue"
					onChange={(e) =>
						setProduct({
							...form,
							type: e.target.value,
						})
					}
					placeholder="Type product catalogue here"
					value={form.type}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="price"
					label="Price"
					type="number"
					placeholder="Type Price here"
					onChange={(e) =>
						setProduct({ ...form, price: e.target.value })
					}
					value={form.price}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="rating"
					type="number"
					label="Rating"
					placeholder="Type rating here"
					onChange={(e) =>
						setProduct({ ...form, rating: e.target.value == '' ? "" : parseFloat(e.target.value) })
					}
					value={form.rating}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="sold"
					type="number"
					label="Sold"
					placeholder="Type sold here"
					onChange={(e) =>
						setProduct({ ...form, sold: e.target.value  })
					}
					value={form.sold}
					variant="standard"
				/>

				<TextField
					sx={{ mb: 2 }}
					name="img1"
					label="Image 1"
					placeholder="Link Image 1"
					onChange={(e) =>
						setProduct({ ...form, img1: e.target.value })
					}
					value={form.img1}
					variant="standard"
				/>

				<TextField
					sx={{ mb: 2 }}
					name="img2"
					label="Image 2"
					placeholder="Link Image 2"
					onChange={(e) =>
						setProduct({ ...form, img2: e.target.value })
					}
					value={form.img2}
					variant="standard"
				/>

				<TextField
					sx={{ mb: 2 }}
					name="img3"
					label="Image 3"
					placeholder="Link Image 3"
					onChange={(e) =>
						setProduct({ ...form, img3: e.target.value })
					}
					value={form.img3}
					variant="standard"
				/>

				<TextField
					sx={{ mb: 2 }}
					name="img4"
					label="Image 4"
					placeholder="Link Image 4"
					onChange={(e) =>
						setProduct({ ...form, img4: e.target.value })
					}
					value={form.img4}
					variant="standard"
				/>

				<Typography sx={{ pb: 1 }} variant="h7">
					Specification
				</Typography>
				<TextareaAutosize
					maxRows={4}
					minRows={3}
					placeholder="Type specification here"
					value={form.spec}
					sx={{ width: "100%" }}
					onChange={(e) =>
						setProduct({ ...form, spec: e.target.value })
					}
				/>
				<Typography sx={{ pb: 1, pt: 2 }} variant="h7">
					Description
				</Typography>
				<TextareaAutosize
					maxRows={4}
					minRows={3}
					placeholder="Type Description here"
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
						sx={{ mx: 1 }}
						onClick={() => setAppear(false)}
						variant="outlined"
						size="small"
						color="error">
						Cancel
					</Button>
				)}
				<Button
					sx={{ mx: 1 }}
					onClick={handleSubmit}
					variant="outlined"
					size="small"
					type="submit"
					color="success">
					Submit
				</Button>
			</Container>
		</Box>
	);
};

export default FormProduct;
