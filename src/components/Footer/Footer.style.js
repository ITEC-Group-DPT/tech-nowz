import { makeStyles } from '@mui/styles';
import { colors } from '../../constant';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center !important',
        marginTop: '3rem !important',
        width: '100% !important',
        backgroundColor: colors.primary,
        color: 'white',
    },
});

export default useStyles;