const notify = (contact, contactFunction) => {
  return contactFunction(contact);
}

const notifyByEmail = (email) => {
  return "Email sent to " + email
}

const notifyByText = (phone) => {
  return "Text sent to " + phone
}

module.exports = { notify, notifyByEmail, notifyByText };

/*
For import you should then destructure

IMPORT FIRST

const modules = require('./notify')

THEN ASSIGN TO SEPERATE VARS USING DESTRUCTURING

const {notify, notifyByEmail, notifyByText} = modules
*/