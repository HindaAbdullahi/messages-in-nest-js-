import {IsString} from 'class-validator';
export class createMessageDto{
    @IsString()
    content :String;


} 