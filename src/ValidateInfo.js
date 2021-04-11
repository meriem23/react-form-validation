export default function validateInfo(values) {
  let errors = {};
  const emailRegex =
    "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$/.";

  //username
  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  //email
  if (!values.email) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email address is invalid";
  }
  //password
  if (!values.password) {
    errors.password = "password required";
  } else if (values.password.length < 6) {
    errors.password = "password length must be 6 characters or more";
  }
  //password2
  if (!values.password2) {
    errors.password2 = "password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "password do not match";
  }
  return errors;
}
