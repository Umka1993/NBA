import { IErrors } from 'types/reduxTypes';
import { IErrorMessage, ResultCodesEnum } from '../../api/dto/IAutorization';

export const errorProcess = (errors: IErrors): void => {
  errors.error = true;
  switch (errors.status) {
    case ResultCodesEnum.DuplicateData:
      errors.message = IErrorMessage.DuplicateData;
      break;
    case ResultCodesEnum.ServerError:
      errors.message = IErrorMessage.ServerError;
      break;
    case ResultCodesEnum.Unauthorized:
      errors.message = IErrorMessage.Unauthorized;
      break;
    default:
      errors.message = IErrorMessage.OtherError;
  }
};
