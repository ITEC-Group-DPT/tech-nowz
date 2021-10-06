import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        borderRadius: '25px !important',
        boxShadow: 'none !important',
    },

    cardActionArea: {
        padding: '.9rem !important',
    },

    pImage: {
        objectFit: 'contain !important',
    },

    pName: {
        fontSize: '.85rem !important',
        fontWeight: '500 !important',
        minHeight: '80px',
    },

    cardActions :{
        padding: '16px 0px 0px 16px !important',
    },

    pPrice: {
        fontSize: '.9rem !important',
        fontWeight: '600 !important',
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