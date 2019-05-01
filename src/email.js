const validateEmail = (email) => {
  if (!email.includes('@')) {
    return false;
  }
  if (!email.includes('.')) {
    return false;
  }
  return true;
};

module.exports = validateEmail;
