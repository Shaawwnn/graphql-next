import { UserRole } from './UserRole';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  pronouns: string | undefined | null;
  password?: string;
  googleId?: string;
  role: UserRole;
  imageUrl?: string | null;
  bio?: string | null;
  rating?: number | null;
  createdAt: Date;
  updatedAt: Date;
  title?: string | null;
}
