import { Request, Response } from 'express'
import 'reflect-metadata'

export const pathSymbolKey = Symbol('path')

export const path = (path: string): Function => {
    return function(target: any, propertyKey: any, descriptor: TypedPropertyDescriptor<Function>) {
        Reflect.defineMetadata(pathSymbolKey, path, target, propertyKey)

        if (!descriptor.value) return

        // 函数封装
        const oldMethod = descriptor.value

        descriptor.value = function(req: Request, res: Response) {
            const params = Object.assign(
                {},
                req.body,
                req.query,
            )
            const result = oldMethod.call(this, params)
            res.send(result)
        }
    }
}
