import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('DB_HOST') || 'localhost',
        port: +config.get('DB_PORT') || 5432,
        username: config.get('DB_USERNAME') || 'root',
        password: config.get('DB_PASSWORD') || 'prueba',
        database: config.get('DB_DATABASE') || 'test',
      });

      return dataSource.initialize();
    },
  },
];
