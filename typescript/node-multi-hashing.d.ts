declare module MutliHashing {
    export function scrypt(data: any, n?: any, r?: any): Buffer;
    export function scryptjane(data: any, nTime: any, nTimestamp: any, nMin: any, nMax: any): Buffer;
    export function scryptn(data: any, nFactor?: any): Buffer;
    export function sha1(data: any, ...args: any[]): Buffer;
    export function x11(data: any, ...args: any[]): Buffer;
    export function quark(data: any, ...args: any[]): Buffer;
    export function yescrypt(data: any, ...args: any[]): Buffer;
    export function x13(data: any, ...args: any[]): Buffer;
    export function x15(data: any, ...args: any[]): Buffer;
    export function nist5(data: any, ...args: any[]): Buffer;
    export function keccak(data: any, ...args: any[]): Buffer;
    export function blake(data: any, ...args: any[]): Buffer;
    export function skein(data: any, ...args: any[]): Buffer;
    export function groestl(data: any, ...args: any[]): Buffer;
    export function fugue(data: any, ...args: any[]): Buffer;
    export function shavite3(data: any, ...args: any[]): Buffer;
    export function hefty1(data: any, ...args: any[]): Buffer;
    export function qubit(data: any, ...args: any[]): Buffer;
    export function yescrypt(data: any, ...args: any[]): Buffer;
    export function s3(data: any, ...args: any[]): Buffer;
    // export function lyra2re(data: any, ...args: any[]): Buffer;
    export function neoscrypt(data: any, ...args: any[]): Buffer;
    export function dcrypt(data: any, ...args: any[]): Buffer;
    
}

export = MutliHashing;