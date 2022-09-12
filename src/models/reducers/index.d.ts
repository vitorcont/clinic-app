export as namespace reducers;

export interface AuthState {
	authenticated: {
		accessToken: string | null;
		refreshToken: string | null;
	};
}

export interface UserState {
	me: models.User | null;
}

export interface ReduxState {
	loading: number;
	auth: AuthState;
	user: UserState;
}
