import { type DirectiveParams } from './directive-type'

import type * as angular from 'angular'

type Scope<Props> = {
  props: Props
} & angular.IScope

export type AngularState<Props> = {
  didInitialCompile: boolean
  scope?: Scope<Props>
}

export type Angular2ReactArgs<Props> =
  | {
      name: string
      component: angular.IComponentOptions
    }
  | {
      name: string
      directive: DirectiveParams<any>
      scope: Partial<Props>
    }
