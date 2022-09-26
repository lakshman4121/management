export interface Student {
    createdAt:string;
    name:string;
    avatar:string;
    id:number;
    mobile:number;
    gender:string;
    email:string;
    batch:string;
    address:{
        city:string;
        mandalam:string;
        district:string;
        state:string;
        pin:number;
    }
    educations:[{
        qulifications:string;
        year:Number;
        percentage:string;

    }];
    company:[{
        comapanyname:string;
        locations:string;
        package:string;
        offerDate:number;
    }
    ];
    sourcetype:string;
    direct:string;
    referalname:string;
    source:string;
}