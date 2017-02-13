export class User {

    constructor( public email: string,
                 public password?: string,
                 public firstName?: string,
                 public lastName?: string,
                 public address?: string,
                 public city?: string,
                 public state?: string,
                 public zipcode?: string
    ) {}
}