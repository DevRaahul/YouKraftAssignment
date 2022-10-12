export const isInvalidName = (value) => {
  if (value === "") {
    return true;
  }
};

export const isInvalidAge = (value) => {
  value = parseInt(value);
  const numRegex = /^[0-9]{1,10}$/;

  if (!numRegex.test(value) || value === "" || value === " " || value < 0 || value > 100) {
    return true;
  }
};

export const isInvalidEmail = (value) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(value)) {
    return true;
  }
};

export const isInvalidNumber = (value) => {
  const regex = /^[0-9]{1,10}$/;

  if (!regex.test(value)) {
    return true;
  }
};
