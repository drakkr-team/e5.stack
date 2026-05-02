import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'profile.view': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'profile.view': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'profile.view': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}