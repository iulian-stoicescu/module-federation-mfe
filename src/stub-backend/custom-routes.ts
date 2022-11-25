/*
 * Copyright '2022' Iulian Stoicescu or its subsidiaries. All Rights Reserved.
 */
import { users } from './stub-endpoints/my-service-stubs';

export const customRoutes = server => {
  // handles getUserInfo() method from my.service.ts
  server.get('/v1/user-info', (req, res) => {
    res.json(users.find(user => user.id === +req.query.id));
  });
};
