/*
 * Copyright '2022' Iulian Stoicescu or its subsidiaries. All Rights Reserved.
 */
export class UserInfoModel {
  public id: number;
  public name: string;
  public country: string;
  public position: string;

  constructor(userInfo: any) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.country = userInfo.country;
    this.position = userInfo.position;
  }
}
