export type GetTournamentsParams = {
  q?: string;
};

export interface TournamentParticipants {
  current: number;
  max: number;
}

export interface PatchTournamentParams {
  id: string;
  name: string;
}

export interface Tournament {
  id: string;
  game: string;
  name: string;
  organizer: string;
  startDate: string;
  participants: TournamentParticipants;
}

export interface CreateTournamentParams {
  name: string;
}
