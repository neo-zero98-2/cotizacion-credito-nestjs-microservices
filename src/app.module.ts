import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CotizacionCreditosModule } from './modules/cotizacion-creditos/cotizacion-creditos.module';
import { Plazo } from './modules/cotizacion-creditos/entitys/plazo';
import { Producto } from './modules/cotizacion-creditos/entitys/producto';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: ':.oTTyZVUQ$=',
    //   database: 'cotizacion-creditos',
    //   entities: [
    //     Producto,
    //     Plazo
    //   ],
    //   // synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'gsa2kjubvsm2od5t',
      password: 'g2ahpfmmbq35lxq6',
      database: 'ovxtm4jq24bmm1lz',
      entities: [
        Producto,
        Plazo
      ],
      autoLoadEntities: true,
      // synchronize: true,
    }),
    CotizacionCreditosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
