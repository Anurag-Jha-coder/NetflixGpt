const checkvalidation = (name, email, password) => {
  const validateEmail =
    /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
  const validateName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
  const viladatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!validateName) {
    return "Name is not valid";
  }

  if (!validateEmail) {
    return "Email is not valid";
  }

  if (!viladatePassword) {
    return "Password is not valid";
  }

  return null;
};

export default checkvalidation;
