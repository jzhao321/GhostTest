import styles from './user-list.module.scss';
import Card from '@mui/material/Card';
import {
  Avatar,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';

export interface User {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export interface UserListProps {
  userData: User[];
  loading: boolean;
}

export const UserList: React.FC<UserListProps> = ({ userData, loading }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const tableContent = useMemo(() => {
    if (loading) {
      return <CircularProgress />;
    }

    return (
      <TableContainer>
        <Table>
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography className={styles.tableHeadText}>
                  {t('name')}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeadText}>
                  {t('email')}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeadText}>
                  {t('phone')}
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map(({ email, name, phone, avatarUrl }, index) => {
              return (
                <TableRow key={name + index} hover>
                  <TableCell className={styles.thumbnailTableCell}>
                    <Avatar>
                      <Image alt="placeholder" src={avatarUrl} layout="fill" />
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography>{name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        router.push(`/${index + 1}`);
                      }}
                    >
                      <NavigateNextIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }, [loading, router, t, userData]);

  return <Card className={styles.userList}>{tableContent}</Card>;
};

export default UserList;
