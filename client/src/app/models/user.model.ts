export interface User {
  _id?: string;
  email: string;
  password: string;
  isAdmin: boolean;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  address?: {
    street?: string;
    city?: string;
    country?: string;
    postcode?: string;
  };
  cart?: [
    {
      product: object;
      quantity: number;
    }
  ];
  sessions?: Array<{
    token: string;
    expiresAt: string;
  }>;
  resetPasswordToken?: {
    token: string;
    expiresAt: number;
  };
}
