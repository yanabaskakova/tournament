import { Tournament } from '../services/types';

export const FETCH_TOURNAMENTS_PENDING = 'tournaments/fetchPending';
export const FETCH_TOURNAMENTS_FULFILLED = 'tournaments/fetchFulfilled';
export const FETCH_TOURNAMENTS_REJECTED = 'tournaments/fetchRejected';

export const PATCH_TOURNAMENT_PENDING = 'tournaments/patchPending';
export const PATCH_TOURNAMENT_FULFILLED = 'tournaments/patchFulfilled';
export const PATCH_TOURNAMENT_REJECTED = 'tournaments/patchRejected';

export const DELETE_TOURNAMENT_PENDING = 'tournaments/deletePending';
export const DELETE_TOURNAMENT_FULFILLED = 'tournaments/deleteFulfilled';
export const DELETE_TOURNAMENT_REJECTED = 'tournaments/deleteRejected';

export const CREATE_TOURNAMENT_PENDING = 'tournaments/createPending';
export const CREATE_TOURNAMENT_FULFILLED = 'tournaments/createFulfilled';
export const CREATE_TOURNAMENT_REJECTED = 'tournaments/createRejected';

interface FetchTournamentsPending {
  type: typeof FETCH_TOURNAMENTS_PENDING;
}

interface FetchTournamentsFulfilled {
  type: typeof FETCH_TOURNAMENTS_FULFILLED;
  payload: { data: Tournament[] };
}

interface FetchTournamentsRejected {
  type: typeof FETCH_TOURNAMENTS_REJECTED;
  payload: {
    error: Error;
  };
}

interface PatchTournamentPending {
  type: typeof PATCH_TOURNAMENT_PENDING;
}

interface PatchTournamentFulfilled {
  type: typeof PATCH_TOURNAMENT_FULFILLED;
  payload: { data: Tournament };
}

interface PatchTournamentRejected {
  type: typeof PATCH_TOURNAMENT_REJECTED;
  payload: {
    error: Error;
  };
}

interface DeleteTournamentPending {
  type: typeof DELETE_TOURNAMENT_PENDING;
}

interface DeleteTournamentFulfilled {
  type: typeof DELETE_TOURNAMENT_FULFILLED;
  payload: {
    id: string;
  };
}

interface DeleteTournamentRejected {
  type: typeof DELETE_TOURNAMENT_REJECTED;
  payload: {
    error: Error;
  };
}

interface CreateTournamentPending {
  type: typeof CREATE_TOURNAMENT_PENDING;
}

interface CreateTournamentFulfilled {
  type: typeof CREATE_TOURNAMENT_FULFILLED;
  payload: {
    tournament: Tournament;
  };
}

interface CreateTournamentRejected {
  type: typeof CREATE_TOURNAMENT_REJECTED;
  payload: {
    error: Error;
  };
}

export type Actions =
  | FetchTournamentsPending
  | FetchTournamentsFulfilled
  | FetchTournamentsRejected
  | PatchTournamentPending
  | PatchTournamentFulfilled
  | PatchTournamentRejected
  | DeleteTournamentPending
  | DeleteTournamentFulfilled
  | DeleteTournamentRejected
  | CreateTournamentPending
  | CreateTournamentFulfilled
  | CreateTournamentRejected;
