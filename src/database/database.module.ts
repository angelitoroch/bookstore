import { Module } from '@nestjs/common';
import { databaseProviders } from './database.service';

/**necesitamos exportar estos proveedores para que sean accesibles para el resto de la aplicación. */
@Module({
  imports: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
