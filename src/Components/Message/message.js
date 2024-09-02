// getMessage.js

export const message = {
  LoginTitle: "You are on login page",
  ErrorTitle: "You are on Error page",
  CreateNewuser: "You can create Your Username and Password Here",
  SignOn: "SignOn",
  Create: "Create",
};

const getMessage = (key) => {
  return message[key];
};

export default getMessage;
