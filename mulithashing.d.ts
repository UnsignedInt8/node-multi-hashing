declare module MutliHashing {
    export function scrypt(data: any, n?: any, r?: any): Buffer;
    export function scryptjane(data: any, nTime: any, nTimestamp: any, nMin: any, nMax: any): Buffer;
    export function scryptn(data: any, nFactor?: any): Buffer;
    export function sha1(data: any, ...args: any[]): Buffer;
    export function x11(data: any, ...args: any[]): Buffer;
    export function quark(data: any, ...args: any[]): Buffer;
    export function yescrypt(data: any, ...args: any[]): Buffer;
}

export = MutliHashing;