export const checkValidData = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&^#]{8,}$/;

  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  if (!passwordRegex.test(password)) {
    return "Invalid password format";
  }
  return null;
};
