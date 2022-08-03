export interface Profile {
  user_id: number;
  username: string;
  phone: string;
  line_id: string;
  ac_id: number;
  full_name: string;
  bank_account: string;
  bank_number: string;
  bank_code: string;
  amount: string;
}
export interface ProfileResult {
  status: string;
  message: string;
  loading: boolean;
  data?: Profile;
}
