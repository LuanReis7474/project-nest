import { IsNumber, IsString } from "class-validator";


export class CreateEventsDTO {

    @IsString()
    startTime: string;

    @IsString()
    endTime: string;

    @IsString()
    describe: string;

    @IsNumber()
    idUser: number;
}