export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    suite: string;
    street: string;
    city: string;
  };
  phone: string;
}

export interface ProfileCardProps {
  user: User;
}
