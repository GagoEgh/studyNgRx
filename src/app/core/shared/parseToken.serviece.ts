import { Injectable } from "@angular/core";

@Injectable()
export class ParesTokenService {
    constructor() { }

    setToken(key: string, value: any) {
        try {
            localStorage.setItem(key, value)
        } catch (err) {
            console.log(err)
        }
    }

    getToken(key: string) {
        try {
            return localStorage.getItem(key)
        } catch (err) {
            console.log(err)
            return null
        }

    }
}