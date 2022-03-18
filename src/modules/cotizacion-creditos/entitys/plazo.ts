import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('plazo')
export class Plazo {
    
    @PrimaryColumn()
    idplazos:String;

    @Column('int')
    plazo:Number;

    @Column('double')
    taza_normal:Number;

    @Column('double')
    taza_puntual:Number;
}
