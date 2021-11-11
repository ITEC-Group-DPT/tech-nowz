import React from 'react'
import styles from './CategoryPage.styles'
import { useParams, useLocation } from "react-router-dom"

const CategoryPage = () => {
    const { name } = useParams()
    console.log("category: ", name);
    return (
        <div>

        </div>
    )
}

export default CategoryPage
