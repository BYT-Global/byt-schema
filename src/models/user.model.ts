import {prop, Typegoose} from 'typegoose';
import {ApiModelProperty} from '@nestjs/swagger';

export class User extends Typegoose {
    @ApiModelProperty({})
    _id?: string;

    @ApiModelProperty({})
    @prop()
    googleToken: string;

    @ApiModelProperty({})
    @prop()
    facebookToken: string;

    @ApiModelProperty({})
    @prop()
    name: string;

    @ApiModelProperty({})
    @prop()
    email: string;

    @ApiModelProperty({})
    @prop()
    profilePhoto: string;
}

export const UserModel = new User().getModelForClass(User);
