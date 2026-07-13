export type JoinRequestStatus =
  | "PENDING"
  | "ACCEPTED"
  | "DECLINED";

export interface JoinRequest {
  id: number;
  partyId: number;

  applicantName: string;
  applicantCountry: string;

  message: string;
  status: JoinRequestStatus;
}
