import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.login_with_credentials': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'profile.view': { paramsTuple?: []; params?: {} }
    'profile.update': { paramsTuple?: []; params?: {} }
    'profile.delete': { paramsTuple?: []; params?: {} }
    'auth.forgot': { paramsTuple?: []; params?: {} }
    'auth.reset': { paramsTuple?: []; params?: {} }
    'profile.updatePassword': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'auth.login_with_credentials': { paramsTuple?: []; params?: {} }
    'auth.forgot': { paramsTuple?: []; params?: {} }
    'auth.reset': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'auth.logout': { paramsTuple?: []; params?: {} }
    'profile.delete': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'profile.view': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'profile.view': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'profile.update': { paramsTuple?: []; params?: {} }
    'profile.updatePassword': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}