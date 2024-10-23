import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserRoleColumn1729652512316 implements MigrationInterface {
    name = 'AddUserRoleColumn1729652512316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "absence" ("id" SERIAL NOT NULL, "start_date" date NOT NULL, "end_date" date NOT NULL, "reason" character varying NOT NULL, "employee_id" integer, CONSTRAINT "PK_30089b15c0f880f026581218c16" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_135936b6918bd375a4479b92311"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_135936b6918bd375a4479b9231"`);
        await queryRunner.query(`ALTER TABLE "absence" ADD CONSTRAINT "FK_3107699a832275e5c5b0135e261" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_135936b6918bd375a4479b92311" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_135936b6918bd375a4479b92311"`);
        await queryRunner.query(`ALTER TABLE "absence" DROP CONSTRAINT "FK_3107699a832275e5c5b0135e261"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_135936b6918bd375a4479b9231" UNIQUE ("employee_id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_135936b6918bd375a4479b92311" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`DROP TABLE "absence"`);
    }

}
