import axios, { AxiosRequestConfig } from 'axios';
import { API_TOURNAMENTS_URL } from '../constants/api';
import * as Types from './types';

export const getTournaments = async (
  params?: Types.GetTournamentsParams,
  config = {} as AxiosRequestConfig
) => {
  const clearedQueryParams = clearQueryParams(params);

  return axios.get<Types.Tournament[]>(API_TOURNAMENTS_URL, {
    ...config,
    params: clearedQueryParams
  });
};

export const patchTournament = (params: Types.PatchTournamentParams) => {
  const { id, ...rest } = params;
  return axios.patch(`${API_TOURNAMENTS_URL}/${id}`, rest);
};

export const deleteTournament = (id: string) => {
  return axios.delete<Types.Tournament>(`${API_TOURNAMENTS_URL}/${id}`);
};

export const createTournament = (params: Types.CreateTournamentParams) => {
  return axios.post<Types.Tournament>(API_TOURNAMENTS_URL, params);
};

function clearQueryParams<
  T extends Record<string, unknown> = Record<string, unknown>
>(params?: T) {
  if (!params) return;

  const shallowClone = { ...params };

  for (let key in shallowClone) {
    if (shallowClone[key] === undefined) delete shallowClone[key];
  }
  return shallowClone as T;
}
