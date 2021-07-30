import dayjs from 'dayjs';
import React, { FC } from 'react';

import { Tournament } from '../../services/types';
import Button from '../Button';
import H6 from '../H6';

import * as S from './Card.styles';

interface Props {
  tournament: Tournament;

  onEdit: (tournament: Tournament) => void;
  onDelete: (id: string) => void;
}

const Card: FC<Props> = ({ tournament, onEdit, onDelete }) => {
  const { organizer, name, game, participants, startDate, id } = tournament;
  return (
    <S.Card>
      <H6>{name}</H6>
      <S.Text>Organizer: {organizer}</S.Text>
      <S.Text>Game: {game}</S.Text>
      <S.Text>
        Participants: {participants.current}/{participants.max}
      </S.Text>
      <S.Text>Start: {dayjs(startDate).format('DD/MM/YYYY, HH:mm:ss')}</S.Text>

      <S.Actions>
        <Button onClick={() => onEdit(tournament)}>Edit</Button>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </S.Actions>
    </S.Card>
  );
};

export default Card;
