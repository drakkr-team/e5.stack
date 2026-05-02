/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  profile: {
    view: typeof routes['profile.view']
  }
}
