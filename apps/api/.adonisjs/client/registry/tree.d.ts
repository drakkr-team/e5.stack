/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    loginWithCredentials: typeof routes['auth.login_with_credentials']
    logout: typeof routes['auth.logout']
  }
  profile: {
    view: typeof routes['profile.view']
  }
}
