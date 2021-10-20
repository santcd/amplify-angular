import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';
import { Hub, Logger } from 'aws-amplify';
@Component({
  selector: 'app-amplify-ui-login',
  templateUrl: './amplify-ui-login.component.html',
  styleUrls: ['./amplify-ui-login.component.css']
})
export class AmplifyUiLoginComponent implements OnInit {
  ser: CognitoUserInterface | undefined;
  authState!: AuthState;
  user: CognitoUserInterface | undefined;

  formFields = [
    {
      type: 'email',
      required: true,
    },
    {
      type: 'password',
      required: true,
    },
    {
      type: 'name',
      label: 'Contact Name',
      placeholder: 'e.g. John Smith',
      required: false,
    },
    {
      type: 'custom:age',
      label: 'Enter your age',
      required: false,
      placeholder: '30',
    },
  ];
  logger = new Logger('My-Logger');
 

  constructor(
    private ref: ChangeDetectorRef
   ) {

    Hub.listen('auth', (data) => {
      console.log(data.payload.event);
      switch (data.payload.event) {
        case 'signIn':
          this.logger.info('user signed in');
          break;
        case 'signUp':
          this.logger.info('user signed up');
          break;
        case 'signOut':
          this.logger.info('user signed out');
          break;
        case 'signIn_failure':
          this.logger.error('user sign in failed');
          break;
        case 'tokenRefresh':
          this.logger.info('token refresh succeeded');
          break;
        case 'tokenRefresh_failure':
          this.logger.error('token refresh failed');
          break;
        case 'configured':
          this.logger.info('the Auth module is configured');
      }
    });
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}