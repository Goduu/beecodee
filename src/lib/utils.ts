import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import bcrypt from "bcrypt";
// import jwt, { JwtPayload } from "jsonwebtoken";

// export function createJWT(data: JwtPayload) {
//     return new Promise((resolve, reject) => {
//         jwt.sign(data, "<insert your JWT secret here!>", (err, token) => {
//             if (err) {
//                 return reject(err);
//             }

//             return resolve(token);
//         });
//     });
// }

// export function comparePassword(plainText: string, hash: string) {
//     return new Promise((resolve, reject) => {
//         bcrypt.compare(plainText, hash, (err, result) => {
//             if (err) {
//                 return reject(err);
//             }

//             return resolve(result);
//         });
//     });
// }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
