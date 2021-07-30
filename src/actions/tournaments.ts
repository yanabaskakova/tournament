import axios, { CancelTokenSource } from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers';
import * as API from '../services/tournaments';
import * as APITypes from '../services/types';
import * as Types from './types';

// to avoid race condition
let fetchTournamentsSource: CancelTokenSource | undefined = undefined;
export const fetchTournaments = (params?: APITypes.GetTournamentsParams) => {
  fetchTournamentsSource?.cancel?.();
  fetchTournamentsSource = axios.CancelToken.source();

  return async (dispatch: ThunkDispatch<RootState, null, Types.Actions>) => {
    dispatch({ type: Types.FETCH_TOURNAMENTS_PENDING });
    try {
      const { data } = await API.getTournaments(params, {
        cancelToken: fetchTournamentsSource?.token
      });

      dispatch({
        type: Types.FETCH_TOURNAMENTS_FULFILLED,
        payload: { data }
      });
    } catch (error) {
      if (axios.isCancel(error)) return;

      dispatch({
        type: Types.FETCH_TOURNAMENTS_REJECTED,
        payload: { error }
      });
    }
  };
};

export const updateTournament = (params: APITypes.PatchTournamentParams) => {
  return async (dispatch: ThunkDispatch<RootState, null, Types.Actions>) => {
    dispatch({ type: Types.PATCH_TOURNAMENT_PENDING });

    try {
      const { data } = await API.patchTournament(params);

      dispatch({ type: Types.PATCH_TOURNAMENT_FULFILLED, payload: { data } });
    } catch (error) {
      dispatch({ type: Types.PATCH_TOURNAMENT_REJECTED, payload: { error } });
    }
  };
};

export const deleteTournament = (id: string) => {
  return async (dispatch: ThunkDispatch<RootState, null, Types.Actions>) => {
    dispatch({ type: Types.DELETE_TOURNAMENT_PENDING });

    try {
      await API.deleteTournament(id);

      dispatch({ type: Types.DELETE_TOURNAMENT_FULFILLED, payload: { id } });
    } catch (error) {
      dispatch({ type: Types.DELETE_TOURNAMENT_REJECTED, payload: { error } });
    }
  };
};

export const createTournament = (params: APITypes.CreateTournamentParams) => {
  return async (dispatch: ThunkDispatch<RootState, null, Types.Actions>) => {
    dispatch({ type: Types.CREATE_TOURNAMENT_PENDING });

    try {
      const { data } = await API.createTournament(params);

      dispatch({
        type: Types.CREATE_TOURNAMENT_FULFILLED,
        payload: { tournament: data }
      });
    } catch (error) {
      dispatch({ type: Types.CREATE_TOURNAMENT_REJECTED, payload: { error } });
    }
  };
};
