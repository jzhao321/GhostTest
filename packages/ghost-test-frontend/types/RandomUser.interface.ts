export interface RandomUserDataDOB {
  age: number;
  date: string;
}

export interface RandomUserDataID {
  name: string;
  value: string;
}

/**
 * Location interfaces
 */

export interface RandomUserDataLocationCoordinates {
  latitude: string;
  longitude: string;
}

export interface RandomUserDataLocationStreet {
  name: string;
  number: number;
}

export interface RandomUserDataLocationTimezone {
  description: string;
  offset: string;
}

export interface RandomUserDataLocation {
  city: string;
  coordinates: RandomUserDataLocationCoordinates;
  country: string;
  postcode: number;
  state: string;
  street: RandomUserDataLocationStreet;
  timezone: RandomUserDataLocationTimezone;
}

/**
 * Login interface
 */

export interface RandomUserDataLogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

/**
 * Name interface
 */

export interface RandomUserDataName {
  first: string;
  last: string;
  title: string;
}

/**
 * Picture interface
 */

export interface RandomUserDataPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

/**
 * Registered interface
 */

export interface RandomUserDataRegistered {
  age: number;
  date: string;
}

/**
 * Base interface
 */

export interface RandomUserDataBase {
  cell: string;
  dob: RandomUserDataDOB;
  email: string;
  gender: string;
  id: RandomUserDataID;
  location: RandomUserDataLocation;
  login: RandomUserDataLogin;
  name: RandomUserDataName;
  nat: string;
  phone: string;
  picture: RandomUserDataPicture;
  registered: RandomUserDataRegistered;
}

export interface RandomUserRawInfo {
  page: 1;
  results: 100;
  seed: string;
  version: string;
}

/**
 * Raw Data Interface
 */

export interface RandomUserRaw {
  info: RandomUserRawInfo;
  results: RandomUserDataBase[];
}
