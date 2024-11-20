import type {
  IAttributes,
  IController,
  IDirectiveController,
  IDirectiveFactory,
  Injectable,
  IScope,
} from 'angular'

export type DirectiveParams<
  TScope extends IScope = IScope,
  TElement extends JQLite = JQLite,
  TAttributes extends IAttributes = IAttributes,
  TController extends IDirectiveController = IController,
> = Injectable<IDirectiveFactory<TScope, TElement, TAttributes, TController>>
