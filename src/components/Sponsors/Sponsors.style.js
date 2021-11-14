import { colors } from '../../constant';

const styles = {
    container: {
        marginBottom: '100px',
        backgroundColor: colors.primary,
        padding: {
            xs: '2rem 1rem',
            md: '2rem 4rem',
            lg: '3rem 7rem',
        },
        borderRadius: {
            xs: "0",
            md: '25px',
        },
    },

    card: {
        borderRadius: '25px',
        boxShadow: 'none',
        width: '100%',
    },

    sponsor: {
        height: {
            xs: "170px",
            md: "200px",
        },
        width: '100%',
    },

    sponsorTitle: {
        fontSize: {
            xs: "28px",
            md: "32px",
        },
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '45px',
        color: 'white',
    },
}

export default styles;