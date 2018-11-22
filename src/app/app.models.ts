export class Person {
    private _email;
    private _name;

    constructor(name: string, email: string) {
        this._email = email;
        this._name = name;
     }

    public get email() {
        return this._email;
    }
    public set email(value) {
        this._email = value;
    }
    public get name() {
        return this._name;
    }
    public set name(value) {
        this._name = value;
    }
}
