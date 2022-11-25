import { UserInfoModel } from '../../app/models/user-info.model';
import { userInfoFactory } from '../factories/user-info-factory';

// return a list with 4 users
export const users: UserInfoModel[] = [1, 7, 49, 83].map(id => {
  return userInfoFactory.build({ id: id });
});
