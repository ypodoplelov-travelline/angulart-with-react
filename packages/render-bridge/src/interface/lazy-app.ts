import type angular from 'angular'

export const lazy: { app: angular.IModule } = {
  // @ts-expect-error
  app: undefined,
}

export function setApp(value: angular.IModule) {
  lazy.app = value
}
