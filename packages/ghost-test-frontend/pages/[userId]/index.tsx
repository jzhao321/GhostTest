import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getOneUser } from '../../utils/fetchRandomUsers.util';
import UserProfile from '../../components/user-profile/user-profile';
import { AppBar, Toolbar, Switch, Typography } from '@mui/material';
import { ColorModeContext } from '../../utils/darkMode.util';

interface UserProfilePageProps {
  userId: number;
}

export const getServerSideProps: GetServerSideProps<
  UserProfilePageProps
> = async ({ params }) => {
  let parsedUserID = 1;
  if (params && params.userId && typeof params.userId === 'string') {
    parsedUserID = parseInt(params.userId);
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['userId', parsedUserID], getOneUser);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      userId: parsedUserID,
    },
  };
};

export const UserProfilePage: React.FC<UserProfilePageProps> = ({ userId }) => {
  const { data: userProfileData } = useQuery(['userId', userId], getOneUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { toggleColorMode } = useContext(ColorModeContext);

  return userProfileData ? (
    <div>
      <AppBar>
        <Toolbar>
          <Switch onChange={toggleColorMode} />
          <Typography>Dark Mode</Typography>
        </Toolbar>
      </AppBar>
      <UserProfile profileData={userProfileData} />
    </div>
  ) : null;
};

export default UserProfilePage;
