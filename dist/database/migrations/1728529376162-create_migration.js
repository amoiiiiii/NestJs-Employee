"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMigration1728529376162 = void 0;
class CreateMigration1728529376162 {
    constructor() {
        this.name = 'CreateMigration1728529376162';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "attendance" ("id" SERIAL NOT NULL, "date" date NOT NULL, "time_in" TIME NOT NULL, "time_out" TIME, "employee_id" integer, CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "position" character varying NOT NULL, "salary" numeric NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "employee_id" integer, CONSTRAINT "REL_135936b6918bd375a4479b9231" UNIQUE ("employee_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD CONSTRAINT "FK_2be2f615d3c20d620c6485d5463" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_135936b6918bd375a4479b92311" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_135936b6918bd375a4479b92311"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP CONSTRAINT "FK_2be2f615d3c20d620c6485d5463"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "attendance"`);
    }
}
exports.CreateMigration1728529376162 = CreateMigration1728529376162;
//# sourceMappingURL=1728529376162-create_migration.js.map