"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.dataSourceOptions = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
const typeorm_extension_1 = require("typeorm-extension");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
dotenv.config();
exports.dataSourceOptions = {
    type: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT,
    host: process.env.DB_HOST,
    entities: [
        'dist/**/*.entity{.ts,.js}',
        'dist/**/**/entities/*.entity{.ts,.js}',
        'dist/**/**/**/entities/*.entity{.ts,.js}',
    ],
    migrations: ['dist/database/migrations/*{.ts,.js}'],
    seedTracking: false,
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    cache: true,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.AppDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.AppDataSource.initialize()
    .then(async () => {
    console.log('Data source has been initialized!');
    await (0, typeorm_extension_1.runSeeders)(exports.AppDataSource);
})
    .catch((error) => {
    console.error('Error during data source initialization', error);
});
//# sourceMappingURL=database.config.js.map