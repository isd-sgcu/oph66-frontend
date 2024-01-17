interface UserData {
  first_name: string;
  last_name: string;
  allergies: string;
  medical_condition: string;
}
export interface CheckInDataDTO {
  user: UserData;
  already_checkin: boolean;
}
export interface UserShowedData extends UserData {
  id: string;
}
