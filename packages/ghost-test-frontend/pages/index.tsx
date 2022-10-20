import { GetServerSideProps } from 'next';
import UserList, { User } from '../components/user-list/user-list';
import { useContext, useMemo, useState } from 'react';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import styles from './index.module.scss';
import {
  getUsers,
  DEFAULT_USERS_NUM_RESULTS,
} from '../utils/fetchRandomUsers.util';
import {
  AppBar,
  Box,
  Button,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, i18n } from 'next-i18next';
import { ColorModeContext } from '../utils/darkMode.util';
import { useRouter } from 'next/router';

// export const getStaticPaths: GetStaticPaths = async () => {

// }

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ['randomUsers', DEFAULT_USERS_NUM_RESULTS],
    getUsers
  );

  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources();
  }

  const serverSideTranslationsObj = locale
    ? await serverSideTranslations(locale, ['common'])
    : {};

  return {
    props: {
      ...serverSideTranslationsObj,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const Index: React.FC = () => {
  const [numResults, setNumResults] = useState(DEFAULT_USERS_NUM_RESULTS);
  const { t } = useTranslation();

  const { toggleColorMode } = useContext(ColorModeContext);

  const router = useRouter();

  const {
    data: randomUserData,
    isFetching,
    refetch,
  } = useQuery(['randomUsers', numResults], getUsers, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const mappedUserData = useMemo<User[]>(() => {
    return randomUserData
      ? randomUserData.results.map(({ email, name, phone, picture }) => {
          return {
            email: email,
            name: `${name.first} ${name.last}`,
            phone: phone,
            avatarUrl: picture.thumbnail,
          };
        })
      : [];
  }, [randomUserData]);

  const handleButtonClick = () => {
    const newNumber = Math.floor(Math.random() * 10);

    if (newNumber === numResults) {
      refetch();
    } else {
      setNumResults(newNumber);
    }
  };

  const switchToEnglish = () => {
    router.push('/', '/', {
      locale: 'en',
    });
  };

  const switchToGerman = () => {
    router.push('/', '/', {
      locale: 'de',
    });
  };

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box className={styles.page}>
      <AppBar>
        <Toolbar className={styles.toolBar}>
          <Switch onChange={toggleColorMode} />
          <Typography>Dark Mode</Typography>
          <Button variant="contained" onClick={handleButtonClick}>
            {t('refresh')}
          </Button>
          <Button variant="contained" onClick={switchToEnglish}>
            {t('english')}
          </Button>
          <Button variant="contained" onClick={switchToGerman}>
            {t('german')}
          </Button>
        </Toolbar>
      </AppBar>
      <Box className={styles.pageBody}>
        <Box className={styles.userListHeader}>
          <Typography>{t('userListHeader')}</Typography>
        </Box>

        <UserList userData={mappedUserData} loading={isFetching} />
      </Box>
    </Box>
  );
};

export default Index;
