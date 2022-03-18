import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Producto } from '../../entitys/producto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>
        // private repo: ProductoRepository
    ){}

    findAll(skip:number): Promise<Producto[]> {
        const take = 4;
        return this.productoRepository.find({
            skip: take * (skip-1),
            take,
            order: {
                nombre: "ASC"
            },
        });
    }

    agregar(producto:Producto): Promise<any> {
        return this.productoRepository.save(producto);
    }

    getProducto(id:string):Promise<Producto>{
        return this.productoRepository.findOne({
            where: {
                sku:id
            }
        });
    }

    async eliminar(sku:string):Promise<any>{
        return this.productoRepository.delete(sku);
    }

    findByKeyWord(palabraClave:string): Promise<Producto[]>{
        return this.productoRepository.find({
            where: [
                {sku: Like(`%${palabraClave}%`)},
                {nombre: Like(`%${palabraClave}%`)}
            ]
        });
    }

    countPages(): Promise<Number>{
        return this.productoRepository.count();
    }


}
