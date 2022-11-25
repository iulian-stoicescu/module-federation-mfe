/*
 * Copyright '2022' Iulian Stoicescu or its subsidiaries. All Rights Reserved.
 */
import { FixtureFactory } from './fixture-factory';
import { UserInfoModel } from '../../app/models/user-info.model';
import { faker } from '@faker-js/faker';

export class UserInfoFactory extends FixtureFactory<UserInfoModel> {
  build(attributes?): UserInfoModel {
    return {
      id: attributes.id,
      name: faker.name.fullName(),
      country: faker.address.country(),
      position: faker.helpers.arrayElement(['Developer', 'Manager', 'Product Owner', 'CEO'])
    };
  }
}

export const userInfoFactory = new UserInfoFactory();
