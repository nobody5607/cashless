export interface RegisterResult {
  message: string;
  loading: boolean;
  status: string;
  data?: RegisterForm;
}
export interface RegisterForm {
  phone: string;
  password: string;
  line_id: string;
  full_name: string;
  bank_account: string;
  bank_number: string;
  bank_code: string;
}

export interface User {
  user_id: number;
  username: string;
  phone: string;
  line_id: string;
  ac_id: number;
  full_name: string;
  bank_account: string;
  bank_number: string;
  bank_code: string;
}
export interface LoginForm {
  phone: string;
  password: string;
}
export interface ResultLogin {
  status: string;
  token: string;
  message: string;
  loading: boolean;
  data?: User;
}
