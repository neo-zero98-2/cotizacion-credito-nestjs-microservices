import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('producto')
export class Producto {

    @PrimaryColumn()
    sku:String;

    @Column('varchar')
    nombre:String;

    @Column('double')
    precio:Number;

    @Column('varchar')
    descripcion:String;

    @Column('varchar')
    imagen:String;
    
}
