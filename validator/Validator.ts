import { IValidator } from "../interfaces/IValidator";
import { User } from "../model/user";
export class Validator implements IValidator {
    user: User
    constructor(user: User) {
        this.user = user;
    }

    validateUsername(): boolean {
        if (this.user.username && this.user.username.length > 3 && this.user.username.length < 20) {
            return true;
        }
        console.log('Incorrect username')
        return false;
    }

    validatePassword(): boolean {
        if (this.user.password && this.user.password.length > 6 && this.user.password.length < 20) {
            return true;
        }
        console.log('Incorect Password');
        return false;
    }

    validateEmail(): boolean {
        if (this.user.email && this.user.email.length > 10 && this.user.email.length < 50
            && this.user.email.includes('@')) {
            return true;
        }
        console.log('Incorrect Email');
        return false;
    }


    validateDateOfBirth(): boolean {
        if (this.user.date_of_birth) {
            return true;
        }
        console.log('Incorrect Date');
        return false;
    }

    validateCountry(): boolean {
        if (this.user.country && this.user.country.length > 2) {
            return true;
        }
        console.log('Incorrect Country');
        return false;
    }

    validateProfilePicture(): boolean {
        if (this.user.profile_picture) {
            return true;
        }
        console.log('Incorrect Profile Picture');
        return false;

    }

    validateUser(): boolean {
        if (this.validateUsername() && this.validatePassword()
            && this.validateEmail() && this.validateDateOfBirth() &&
            this.validateCountry() && this.validateCountry()) {
            return true;
        }
        return false;
    }




}