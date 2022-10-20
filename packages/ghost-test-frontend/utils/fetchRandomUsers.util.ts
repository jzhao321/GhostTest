import Axios from 'axios';
import { RandomUserRaw } from '../types/RandomUser.interface';
import { QueryFunctionContext } from '@tanstack/react-query';

export type GetUsersQueryKey = [string, number];

export const DEFAULT_USERS_NUM_RESULTS = 10;

export const getUsers = async ({
  queryKey,
}: QueryFunctionContext<GetUsersQueryKey>) => {
  let numResults = DEFAULT_USERS_NUM_RESULTS;
  if (queryKey && queryKey[1]) numResults = queryKey[1];

  console.log('get Random Users ran', process.env.NEXT_PUBLIC_RANDOM_ME_SEED);
  const { data } = await Axios.get<RandomUserRaw>(
    'https://randomuser.me/api/',
    {
      params: {
        results: numResults,
        seed: process.env.NEXT_PUBLIC_RANDOM_ME_SEED,
      },
    }
  );

  return data;
};

export type GetOneUserQueryKey = [string, number];

export const getOneUser = async ({
  queryKey,
}: QueryFunctionContext<GetOneUserQueryKey>) => {
  const userId = queryKey[1] || 1;

  const { data } = await Axios.get<RandomUserRaw>(
    'https://randomuser.me/api/',
    {
      params: {
        results: userId,
        seed: process.env.NEXT_PUBLIC_RANDOM_ME_SEED,
      },
    }
  );

  return data.results[userId - 1];
};
