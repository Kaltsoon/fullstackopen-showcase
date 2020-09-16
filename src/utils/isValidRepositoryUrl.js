import { isString } from 'lodash';

const REG_EXP = /^https:\/\/github\.com\/.+\/.+$/;

const isValidRepositoryUrl = (value) => {
  return isString(value) && REG_EXP.test(value);
};

export default isValidRepositoryUrl;
