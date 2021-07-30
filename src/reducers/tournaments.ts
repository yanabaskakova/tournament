import * as Types from '../actions/types';
import { Tournament } from '../services/types';

type State = {
  status:
    | 'idle'
    | 'loading'
    | 'success'
    | 'error'
    | 'deleting'
    | 'updating'
    | 'creating';
  error: null | Error;
  data: Tournament[];
};

const initialState: State = {
  status: 'idle',
  error: null,
  data: []
};

const tournaments = (state = initialState, action: Types.Actions): State => {
  switch (action.type) {
    case Types.FETCH_TOURNAMENTS_PENDING: {
      return { ...state, status: 'loading', error: null };
    }
    case Types.FETCH_TOURNAMENTS_FULFILLED: {
      return { ...state, status: 'success', ...action.payload };
    }
    case Types.FETCH_TOURNAMENTS_REJECTED: {
      return { ...state, status: 'error', ...action.payload };
    }

    case Types.PATCH_TOURNAMENT_PENDING: {
      return { ...state, status: 'updating', error: null };
    }
    case Types.PATCH_TOURNAMENT_FULFILLED: {
      return {
        ...state,
        status: 'success',
        data: state.data.map(item =>
          action.payload.data.id === item.id ? action.payload.data : item
        )
      };
    }
    case Types.PATCH_TOURNAMENT_REJECTED: {
      return { ...state, status: 'error', ...action.payload };
    }

    case Types.DELETE_TOURNAMENT_PENDING: {
      return { ...state, status: 'deleting', error: null };
    }
    case Types.DELETE_TOURNAMENT_FULFILLED: {
      return {
        ...state,
        status: 'success',
        data: state.data.filter(item => action.payload.id !== item.id)
      };
    }
    case Types.DELETE_TOURNAMENT_REJECTED: {
      return { ...state, status: 'error', ...action.payload };
    }

    case Types.CREATE_TOURNAMENT_PENDING: {
      return { ...state, status: 'creating', error: null };
    }
    case Types.CREATE_TOURNAMENT_FULFILLED: {
      return {
        ...state,
        status: 'success',
        data: [action.payload.tournament, ...state.data]
      };
    }
    case Types.CREATE_TOURNAMENT_REJECTED: {
      return { ...state, status: 'error', ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default tournaments;
