import { colors } from '../../constant';

const styles = {
    container: {
        marginBottom: '100px',
        backgroundColor: colors.primary,
        padding: {
            xs: '2rem 1rem',
            lg: '3rem 7rem',
        },
        borderRadius: '25px'
    },

    card: {
        borderRadius: '25px',
        boxShadow: 'none',
        width: '100%',
    },

    sponsor: {
        // width: {
        //     sx: '400px',

        // },
        // height: {
        //     sx: '400px',
        // }
        height: "200px",
        width: '100%',
    },

    sponsorTitle: {
        fontSize: '1.8rem !important',
        fontWeight: 'bold !important',
        textAlign: 'center',
        marginBottom: '45px !important',
        color: 'white',
    },
}

export default styles;