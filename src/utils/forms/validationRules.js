const validation = (value, rules, form) => {
  //console.log(form)
  let valid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        console.log('VALIDATION isEmail:', valid);
        break;
      case 'minLength':
        valid = valid && validateMinLength(value, rules[rule]);
        console.log('VALIDATION isEmail:', valid);
        break;
      case 'maxLength':
        valid = valid && validateMaxLength(value, rules[rule]);
        break;
      case 'confirmPass':
        valid =
          valid && validateConfirmPass(value, form[rules.confirmPass].value);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        console.log('VALIDATION isEmail:', valid);
        break;
      default:
        valid = true;
      case 'isAlphaNumeric':
        valid = valid && validateIsAlphaNumeric(value);
        console.log('---Value:', value, '---AlphaNumeric is Valid? :', valid);
        break;
      case 'isAlphaNumericWithSpace':
        valid = valid && validateIsAlphaNumericWithSpace(value);
        console.log('---Value:', value, '---AlphaNumeric is Valid? :', valid);
        break;

      case 'isString':
        valid = valid && validateIsString(value);
        console.log('---Value:', value, '---String is Valid?', valid);
        break;
      case 'isNumber':
        valid = valid && validateIsNumber(value);
        console.log('---Value:', value, 'isNumber is Valid? :', valid);
        break;
    }
  }
  return valid;
};

const validateRequired = value => {
  if (value !== '') {
    return true;
  }
  return false;
};

const validateIsAlphaNumeric = value => {
  const alphaNum = /^[0-9a-zA-Z]+$/;
  console.log('VALIDATE ALPHA NUMERIC: ', value.match(alphaNum));
  if (value.match(alphaNum)) {
    return true;
  } else {
    return false;
  }
};
const validateIsAlphaNumericWithSpace = value => {
  const alphaNum = /^[\w\-\s]+$/
  console.log('VALIDATE Postal ALPHA NUMERIC With Space: ', value.match(alphaNum));
  if (value.match(alphaNum)) {
    return true;
  } else {
    return false;
  }
};

validateIsString = value => {
        const letters = /^[A-Za-z]+$/;
        
        if(value.match(letters))
        {// errror = *Enter alphabets only.
        return true;
        } else {
            return false 
        }
};
validateIsNumber = value => {
    const numbers = /^[-+]?[0-9]+$/;
    if(value.match(numbers))
    {
    return true;
    } else {
        // errror = *Enter numbers only.
        return false 
    }
};
const validateEmail = email => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase());
};

const validateMinLength = (value, ruleValue) => {
  if (value.length >= ruleValue) {
    return true;
  }
  return false;
};

const validateMaxLength = (value, ruleValue) => {
  if (value.length <= ruleValue) {
    return true;
  }
  return false;
};

const validateConfirmPass = (confirmPass, pass) => {
  return confirmPass === pass;
};

export default validation;
