export const checkValidData = (email) => {
  const isEmailvalid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
//   const isPasswordValid =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
//       password
//     );

  if (!isEmailvalid) return "Email is not valid";
  //if (!isPasswordValid) return "Password is not valid";
  return null;
};
