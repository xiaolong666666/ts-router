import 'reflect-metadata'

export const httpSymbolKey = Symbol('http')

export const httpGet = (): MethodDecorator => {
    return (target: any, propertyKey: any) => {
        Reflect.defineMetadata(httpSymbolKey, 'get', target, propertyKey)
    }
}

export const httpPost = (): MethodDecorator => {
    return (target: any, propertyKey: any) => {
        Reflect.defineMetadata(httpSymbolKey, 'post', target, propertyKey)
    }
}