export interface LoginInformation {
  phoneNumber: string;
  password: string;
  smsCode: string;
}

export enum LoginStep {
  CodeLogin,
  Registration,
  SetPassword
}