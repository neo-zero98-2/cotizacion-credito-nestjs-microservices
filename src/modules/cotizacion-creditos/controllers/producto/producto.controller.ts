import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Producto } from '../../entitys/producto';

import { ProductoService } from '../../services/producto/producto.service';

@Controller('cotizacion-creditos')
export class ProductoController {
    constructor(private productoService: ProductoService){}

    @Get('productos-pagination')
    async getAllProducts(
        @Query('pageNo') skip,
        // @Query('pageSize') take, 
        @Res() res: Response){
        
        let producto = await this.productoService.findAll(skip);
       
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: "Successful",
            body: producto
        });
    }

    @Post('add/producto')
    async agregar(@Body() producto: Producto, @Res() res: Response){
        let response = await this.productoService.agregar(producto);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: "Se agrego nuevo producto",
            body: null
        });
    }

    @Get('producto/:id')
    async getProducto(@Param('id') id: string, @Res() res: Response) {
        let producto = await this.productoService.getProducto(id);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: 'Se Obtuvo el producto por id',
            body: producto
        });
    }

    @Post('delete/producto/:id')
    async eliminar(@Param('id') id:string, @Res() res: Response){
        let response = await this.productoService.eliminar(id);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: 'Se limino el producto',
            body: null
        });
    }

    @Get('search/producto/:keyWord')
    async buscar(@Param('keyWord') keyWord:string, @Res() res: Response){
        let productos = await this.productoService.findByKeyWord(keyWord);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: 'Se obtuvo la busqueda',
            body: productos
        });
    }

    @Get('productos-count')
    async countProductos(@Res() res: Response){
        let countProductos = await this.productoService.countPages();
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            mensaje: 'Se obtuvo la busqueda',
            body: countProductos
        });
    }

}
