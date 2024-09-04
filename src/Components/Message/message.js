// getMessage.js

export const message = {
  LoginTitle: "You are on login page",
  Authenticated:
    "You have Successfully Authenticated 😀 Please Fill Rest Of The Detail",
  ErrorTitle: "You are on Error page",
  CreateNewuser: "You can create Your Username and Password Here",
  // SignOn: "SignOn",
  // Create: "Create",
  ErrorUername: "Please enter username .",
  ErrorPassword: "Please enter password.",
};

const getMessage = (key) => {
  return message[key];
};

export default getMessage;
