import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  /**Exportarlo para usarlo en otro lugar de la aplicacion */
  exports: [ConfigService],
})
export class ConfigModule {}
