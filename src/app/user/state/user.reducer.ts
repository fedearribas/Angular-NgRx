import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as UserActions from "./user.actions";

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: false
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
