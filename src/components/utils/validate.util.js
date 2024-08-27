
export const validateLoginCreds = (email, password) => {
  const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  // const passwordRegex = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/";
  if (!email.match(emailRegex)) {
    return "Email not valid";
  }
  return null;
}
