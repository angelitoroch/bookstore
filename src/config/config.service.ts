import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  /*Crear propiedad envConfig que tendra un objeto que tendra un key de tipo string y regresara un string */
  private readonly envConfig: { [key: string]: string };

  /*Definir si estamos en desarrollo o produccion*/
  constructor() {
    /*preguntar al objeto de NODEJS process.env.NODE_ENV si estamos en desarrollo o produccion*/
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    //Si estamos en desarrollo
    if (isDevelopmentEnv) {
      /*Cargamos archivo ENV para acceder a las variables*/
      const envFilePath = __dirname + '/../../.env';

      /*Para leer un archivo necesitamos filesystem (fs)*/
      const existsPath = fs.existsSync(envFilePath);

      /*Si no existe el archivo*/
      if (!existsPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }

      /*Cargar las variables del archivo en la variable envConfig*/
      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      /*Si estamos en produccion*/
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }
  }

  /*Metodo que devolvera el valor de un key especifico*/
  get(key: string): string {
    return this.envConfig[key];
  }
}
