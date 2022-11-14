import { Bind, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('/hazim')
    findHazim(): string {
        return 'This is Hazim';
    }

    // Route parameters
    @Get(':id')
    @Bind(Param())
    findOne(params) {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;  
    }

    @Get()
    findAllCatsObject(@Req() request: Request): string {
        return 'This action returns all cats Object';
    }
}
 