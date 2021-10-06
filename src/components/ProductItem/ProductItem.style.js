import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        borderRadius: '20px !important',
        boxShadow: 'none !important'
    },

    imgWrapper: {
        padding: '.8rem'
    },

    pImage: {
        objectFit: 'contain !important',
    },

    pName: {
        fontSize: '.9rem !important',
        fontWeight: 'normal !important',
        minHeight: '60px',
    },

    cardActions :{
        padding: '16px !important',
    },

    pPrice: {
        fontSize: '.9rem !important',
        fontWeight: 'bold !important',
    },

    btnWrapper: {
        display: 'flex',
        justifyContent: 'end',
    },

    pAddCart: {
        color: 'black !important',
    },
})

export default useStyles;