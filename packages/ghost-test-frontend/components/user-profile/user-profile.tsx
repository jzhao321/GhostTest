import { Avatar, Card, Container, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import styles from './user-profile.module.scss';
import { RandomUserDataBase } from '../../types/RandomUser.interface';

/* eslint-disable-next-line */
export interface UserProfileProps {
  profileData: RandomUserDataBase;
}

export const UserProfile = ({
  profileData: {
    email,
    name,
    phone,
    gender,
    dob,
    picture,
    login: { username, password },
    id,
    nat,
    location,
  },
}: UserProfileProps) => {
  return (
    <Container className={styles.container}>
      <Container className={styles.jumbotron}>
        <Avatar className={styles.avatar}>
          <Image alt="placeholder" src={picture.large} layout="fill" />
        </Avatar>

        <Typography className={styles.nameText}>
          {name.title} {name.first} {name.last}
        </Typography>
      </Container>

      <Container className={styles.topCardContainer}>
        <Card className={styles.card}>
          <PersonIcon className={styles.cardIcon} />
          <Typography className={styles.cardHeader}>
            Personal Details
          </Typography>
          <Divider className={styles.divider} />

          <Typography>Nationality: {nat}</Typography>
          <Typography>
            Date of birth: {new Date(dob.date).toDateString()}
          </Typography>
          <Typography>Gender: {gender}</Typography>
          <Typography>ID Type: {id.name}</Typography>
          <Typography>ID: {id.value}</Typography>
        </Card>
        <Card className={styles.card}>
          <PhoneIcon className={styles.cardIcon} />
          <Typography className={styles.cardHeader}>Contact</Typography>
          <Divider className={styles.divider} />

          <Typography>Phone: {phone}</Typography>
          <Typography>Email: {email}</Typography>
        </Card>
        <Card className={styles.card}>
          <AccountBalanceIcon className={styles.cardIcon} />
          <Typography className={styles.cardHeader}>Account Details</Typography>
          <Divider className={styles.divider} />

          <Typography>Username: {username}</Typography>
          <Typography>Password: {password}</Typography>
        </Card>
      </Container>
      <Card className={styles.mapsCard}>
        <iframe
          className={styles.mapsIFrame}
          src={`https://maps.google.com/maps?q=${location.coordinates.latitude},${location.coordinates.longitude}&hl=es;z=14&output=embed`}
          loading="lazy"
        ></iframe>
      </Card>
    </Container>
  );
};

export default UserProfile;
