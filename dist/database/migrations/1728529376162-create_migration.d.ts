import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateMigration1728529376162 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
