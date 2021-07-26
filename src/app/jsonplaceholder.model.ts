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