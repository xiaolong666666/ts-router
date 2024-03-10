import { Router } from 'express'
import 'reflect-metadata'
import { httpSymbolKey, httpGet, httpPost } from './decorators/http-metadata'
import { pathSymbolKey, path } from './decorators/path-metadata'

class User {
    @httpGet()
    @path('/user/info')
    info() {
        console.log('user info')
        return { messgae: 'user info' }
    }

    @httpPost()
    @path('/user/login')
    login(params) {
        console.log('user login', params)
        return { message: 'user login' }
    }

    @httpPost()
    @path('/user/logout')
    exit() {
        console.log('user logout')
        return { message: 'user logout' }
    }
}

export default (app: Router) => {
    const user = new User()
    console.log(user)
    for (let methodName in user) {
        const method = user[methodName]

        if (typeof method !== 'function') break;

        // 反射
        const httpMethod = Reflect.getMetadata(httpSymbolKey, user, methodName)
        const pathMethod = Reflect.getMetadata(pathSymbolKey, user, methodName)
        console.log(methodName, httpMethod, pathMethod)

        app[httpMethod](pathMethod, method)
    }
}