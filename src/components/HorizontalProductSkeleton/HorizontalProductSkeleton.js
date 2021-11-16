import React from 'react'
import styles from './HorizontalProductSkeleton.styles'
import { Stack, Skeleton } from '@mui/material'

const HorizontalProductSkeleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton
                animation="wave"
                variant="rectangular"
                sx={styles.rectangular}
            />
        </Stack>
    )
}

export default HorizontalProductSkeleton
