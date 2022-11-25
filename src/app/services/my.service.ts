/*
 * Copyright '2022' Iulian Stoicescu or its subsidiaries. All Rights Reserved.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoModel } from '../models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private httpClient: HttpClient) {}

  getUserInfo(id: number): Observable<UserInfoModel> {
    return this.httpClient.get<UserInfoModel>(`/my-service/v1/user-info?id=${id}`);
  }
}
