"use strict";
// export type User = {
//     username: String,
//     email: String,
//     password: String,
//     date_of_birth: String,
//     country: String,
//     profile_picture: String,
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, email, password, date_of_birth, country, profile_picture) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.date_of_birth = date_of_birth;
        this.country = country;
        this.profile_picture = profile_picture;
    }
}
exports.User = User;
