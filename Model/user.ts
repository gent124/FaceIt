
// export type User = {
//     username: String,
//     email: String,
//     password: String,
//     date_of_birth: String,
//     country: String,
//     profile_picture: String,
// }

export class User {
    username: String;
    email: String;
    password: String;
    date_of_birth: String;
    country: String;
    profile_picture: String;

    constructor(username: String, email: String, password: String, date_of_birth: String, country: String, profile_picture: String) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.date_of_birth = date_of_birth;
        this.country = country;
        this.profile_picture = profile_picture;
    }
}