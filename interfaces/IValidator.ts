

export interface IValidator {
    validateUsername(): boolean;
    validatePassword(): boolean;
    validateEmail(): boolean;
    validateDateOfBirth(): boolean;
    validateCountry(): boolean;
    validateProfilePicture(): boolean;
}