import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {}

  async signup(username: string, password: string) {
      await Auth.signUp({
       username,
       password,
        attributes: {
          email: username, // optional
          phone_number: '', // optional - E.164 number convention
          'custom:role':'CUSTOMER_ROLE'
        },
      });
  }

  async signUp(username: string, password: string): Promise<any> {
    return await Auth.signUp({
      username,
       password,
      attributes: {
        email: username,
        'custom:role': 'CUSTOMER_ROLE'
      },
    });
  }

}
