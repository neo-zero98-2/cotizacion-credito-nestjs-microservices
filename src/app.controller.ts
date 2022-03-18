import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateCatDto } from './dtos/crear-gato.dto';
//ejemplos de lo aprendido
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('cats')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  // envio de parametros en metodo get
  @Get('yolo/:id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  // ejemplo de envio de parametros con post
  @Post('add')
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  // ejemplo de manejo de errores
  @Get('error')
  async getError() {
    throw new HttpException({name:'error',body:'esta es una prueba'}, HttpStatus.FORBIDDEN);
  }


  //ejemplo de Query params (http://ruta?version)
  @Get('docs')
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }


  
}
