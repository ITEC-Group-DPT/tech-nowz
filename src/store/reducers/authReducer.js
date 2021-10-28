import ActionType from '../actions/actionType';

const initState = {
	isLoading: false,
	user: {
		isEmpty: true,
	},
};

const AuthReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionType.START_LOGIN:
			return {
				...state,
				isLoading: true,
			};
		case ActionType.LOGIN_SUCCESS:
			return {
				user: action.data,
				isLoading: false,
			};
		case ActionType.LOGIN_FAIL:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default AuthReducer;
