import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from 'src/config/config.keys';

/**Array de conexiones ya que podemos tener varias conexiones  Mongo, MySQL y etc*/
export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule] /**Accedemos a las variables de entorno */,
    inject: [ConfigService] /**A la vez tenemos que hacer una inyeccion */,
    /**useFactory es un metodo Async que ayuda a crear el objeto de conexion */
    async useFactory(config: ConfigService) {
      /**Debe retornar un objeto con todas las propiedades de conexion*/
      return {
        ssl: false,
        type: 'mysql' as 'mysql',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions; //Casteamos a un tipo ConnectionOptions
    },
  }),
];
