import { Router } from 'express'

export type FacadeInvoker<T> = (methodToInvoke: keyof T) => (req: any, ...rest: any[]) => any

export interface IController {
  path: string
  router: Router
}
