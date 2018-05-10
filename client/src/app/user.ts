export class user{
  _id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  occupation: string;
  email: string;
  username: string;
  password: string;
}

export class request {
  _id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  occupation: string;
  email: string;
  username: string
}

export class group {
  _id?: string;
  group_name: string;
  admin: string;
  client: string[];
}
