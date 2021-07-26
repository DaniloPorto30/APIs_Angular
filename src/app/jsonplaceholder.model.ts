export class Posts {
   
    public name!: string;
    public id!: number;
    public email!: string;
    public body!: string;
}

export class Comments {

    public name!: string;
    public id!: number;
    public title!: string;
    public body!: string;
}

export class Albums {

    public id!: number;
    public title!: string;
}

export class Todos {

    public id!: number;
    public title!: string;
    public completed!: string;
}

export class Photos {

    public id!: number;
    public title!: string;
    public url!: string;
    public thumbnailUrl!: string;
}

export class Users {

    public id!: number;
    public name!: string;
    public username!: string;
    public email!: string;
    public street!: string;
    public suite!: string;
    public city!: string;
    public zipcode!: number;
    public lat!: number;
    public lng!: number;
    public phone!: number;
    public website!: string;
    public name2!: string;
    public catchPhrase!: string;
    public bs!: string;
}