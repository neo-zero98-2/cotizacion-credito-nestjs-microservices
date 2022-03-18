import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plazo } from '../../entitys/plazo';

@Injectable()
export class PlazoService {
    constructor(
        @InjectRepository(Plazo)
        private repo: Repository<Plazo>
    ){}

    findAll(): Promise<Plazo[]>{
        return this.repo.find();
    }

    getPlazosPagination(skip:number): Promise<Plazo[]>{
        const take = 4;
        return this.repo.find({
            skip: take * (skip-1),
            take,
            order: {
                plazo: "ASC"
            },
        });
    }

    addPlazo(plazo:Plazo):Promise<any>{
        return this.repo.save(plazo);
    }

    deletePlazo(id:string):Promise<any>{
        return this.repo.delete(id);
    }

    countPages(): Promise<Number>{
        return this.repo.count();
    }
}
