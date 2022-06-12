// import { Child } from './child.interface';

export interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate?: number;
  baggage: string;
  // children: Child[] | null;
}
