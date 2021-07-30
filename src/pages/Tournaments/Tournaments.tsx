import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';

import * as Actions from '../../actions/tournaments';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
import H4 from '../../components/H4';
import Input from '../../components/Input';
import { Tournament } from '../../services/types';
import { useAppSelector } from '../../store';
import * as S from './Tournaments.styles';

const Tournaments = () => {
  const dispatch = useDispatch();
  const tournaments = useAppSelector(state => state.tournaments.data);
  const status = useAppSelector(state => state.tournaments.status);

  const [searchStr, setSearchStr] = useState('');

  const isLoading = status === 'loading';
  const hasError = status === 'error';
  const noItemsFound = tournaments.length === 0 && Boolean(searchStr);

  useEffect(() => {
    dispatch(Actions.fetchTournaments());
  }, [dispatch]);

  useDebounce(
    () => {
      dispatch(
        Actions.fetchTournaments(searchStr ? { q: searchStr } : undefined)
      );
    },
    500,
    [searchStr]
  );

  const handleSearchStrChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target?.value);
  };

  const handleRetry = () => {
    dispatch(
      Actions.fetchTournaments(searchStr ? { q: searchStr } : undefined)
    );
  };

  const handleEdit = (tournament: Tournament) => {
    const newName = prompt('New Tournament Name:', tournament.name);
    const trimmed = newName?.trim();

    if (trimmed) {
      dispatch(Actions.updateTournament({ name: trimmed, id: tournament.id }));
    }
  };

  const handleDelete = (id: string) => {
    const shouldDelete = window.confirm(
      'Do you really want to delete this tournament?'
    );

    if (shouldDelete) {
      dispatch(Actions.deleteTournament(id));
    }
  };

  const handleCreate = () => {
    const name = window.prompt('Tournament Name:', '');
    const trimmed = name?.trim();

    if (trimmed) {
      dispatch(Actions.createTournament({ name: trimmed }));
    }
  };

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <S.PageActions>
        <Input
          value={searchStr || ''}
          onChange={handleSearchStrChange}
          placeholder="Search tournament..."
        />
        <Button onClick={handleCreate} disabled={isLoading}>
          Create tournament
        </Button>
      </S.PageActions>
      {isLoading ? (
        <S.Info>
          <S.InfoText>Loading tournaments...</S.InfoText>
        </S.Info>
      ) : hasError ? (
        <S.Info>
          <S.InfoText>Something went wrong.</S.InfoText>
          <S.RetryButton onClick={handleRetry}>Retry</S.RetryButton>
        </S.Info>
      ) : noItemsFound ? (
        <S.Info>
          <S.InfoText>No tournaments found.</S.InfoText>
        </S.Info>
      ) : (
        <S.Cards>
          {tournaments?.map(tournament => (
            <Card
              key={tournament.id}
              tournament={tournament}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </S.Cards>
      )}
    </Container>
  );
};

export default Tournaments;
