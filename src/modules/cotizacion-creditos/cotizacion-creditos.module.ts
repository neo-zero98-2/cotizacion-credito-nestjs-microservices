import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entitys/producto';
import { ProductoController } from './controllers/producto/producto.controller';
import { ProductoService } from './services/producto/producto.service';
import { PlazoService } from './services/plazo/plazo.service';
import { PlazoController } from './controllers/plazo/plazo.controller';
import { Plazo } from './entitys/plazo';

@Module({
    imports: [TypeOrmModule.forFeature([Producto, Plazo])],
    providers: [ProductoService, PlazoService],
    controllers: [ProductoController, PlazoController]
})
export class CotizacionCreditosModule {}
