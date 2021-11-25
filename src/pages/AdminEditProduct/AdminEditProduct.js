import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import FormProduct from "../../components/FormProduct/FormProduct"
import { editProduct } from "../../api/productApi";

const AdminEditProduct = () => {
    const location = useLocation()
    const history = useHistory()
    console.log(location.state)

    const [productForm, setProductForm] = useState(location.state);

    const checkEmptyForm = (form) => {
        for (const element in form) {
            if (form[element].toString() === "") {
                return false;
            }
        }
        return true;
    }

    const submitEditForm = () => {
        if (checkEmptyForm(productForm)) {
            editProduct(productForm, productForm.productID).then((response) => {
                if (response.data.success == true) {
                    history.goBack()
                }
            });
        } else {
            console.log("empty field");
            // process alert here
        }
    }

    return (
        <>
            {productForm ? (
                <FormProduct
                    form={productForm}
                    setProduct={setProductForm}
                    handleSubmit={submitEditForm}
                />
            ) : (
                null
            )}

        </>
    )
}

export default AdminEditProduct
