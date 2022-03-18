import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { PlazoService } from '../../services/plazo/plazo.service';
import { Response } from 'express';
import { Plazo } from '../../entitys/plazo';

@Controller('cotizacion-creditos')
export class PlazoController {

    constructor(private plazoService:PlazoService){}

    @Get('plazos')
    async getAllPlazos(@Res() res: Response){
        const plazos = await this.plazoService.findAll();

        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: "Se obtuvieron todos los plazos",
            body: plazos
        });
    }

    @Get('plazos-pagination')
    async getPlazos(
        @Query('pageNo') skip:number, 
        // @Query('pageSize') take:number,
        @Res() res: Response){
        const plazos = await this.plazoService.getPlazosPagination(skip);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: "Se obtuvieron todos los plazos",
            body: plazos
        });
    }

    @Post('add/plazo')
    async addPlazo(@Body() plazo:Plazo,@Res() res: Response){
        await this.plazoService.addPlazo(plazo);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: "Se agrego el plazo",
            body: null
        });
    }

    @Post('delete/plazo/:id')
    async deletePlazos(@Param('id') id:string,@Res() res: Response){
        await this.plazoService.deletePlazo(id);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: "Se elimino el plazo",
            body: null
        });
    }

    @Get('plazos-count')
    async countPlazos(@Res() res: Response){
        const count = await this.plazoService.countPages();
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: `Cantidad de plazos: ${count}`,
            body: count
        });
    }

}
