import users  from "../users.json";

export const findOneUser = (email: string, password: string) => {
  return users.find((user) => user.email === email && user.password === password);
}
