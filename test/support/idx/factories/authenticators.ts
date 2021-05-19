import { Factory } from 'fishery';
import { IdxAuthenticator } from '../../../../lib/idx/types';
import {
  PasswordAuthenticatorMethodFactory,
  PushAuthenticatorMethodFactory,
  TotpAuthenticatorMethodFactory,
  SmsAuthenticatorMethodFactory,
  VoiceAuthenticatorMethodFactory,
  EmailAuthenticatorMethodFactory
} from './methods';

export const IdxAuthenticatorFactory = Factory.define<IdxAuthenticator>(({
  sequence
}) => {
  return {
    id: `${sequence}`,
    displayName: 'unknown-authenticator',
    key: 'unknown-key',
    type: 'unknown-type',
    methods: []
  };
});

export const EmailAuthenticatorFactory = IdxAuthenticatorFactory.params({
  displayName: 'Email',
  type: 'email',
  key: 'okta_email',
  methods: [
    EmailAuthenticatorMethodFactory.build()
  ]
});

export const PasswordAuthenticatorFactory = IdxAuthenticatorFactory.params({
  displayName: 'Password',
  type: 'password',
  key: 'okta_password',
  methods: [
    PasswordAuthenticatorMethodFactory.build()
  ]
});

export const OktaVerifyAuthenticatorFactory = IdxAuthenticatorFactory.params({
  displayName: 'Okta Verify',
  key: 'okta_verify',
  type: 'app',
  methods: [
    PushAuthenticatorMethodFactory.build(),
    TotpAuthenticatorMethodFactory.build()
  ]
});

export const PhoneAuthenticatorFactory = IdxAuthenticatorFactory.params({
  displayName: 'Phone',
  key: 'phone_number',
  type: 'phone',
  methods: [
    SmsAuthenticatorMethodFactory.build(),
    VoiceAuthenticatorMethodFactory.build()
  ]
});
