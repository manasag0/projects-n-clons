const Validation = (values) => {
  const errors = {};

  // Name validation
  if(!values.name){
    errors.name ="Name is required.";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 5) {
    errors.password = "Password must be at least 5 characters long.";
  }

  // Password confirmation validation
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};
 export default Validation;