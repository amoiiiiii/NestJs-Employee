import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateUserTable1696268800000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the user table
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'username',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'employeeId',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    // Create foreign key for employeeId if the Employee table exists
    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['employeeId'],
        referencedTableName: 'employee',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('employeeId') !== -1,
    );

    if (foreignKey) {
      await queryRunner.dropForeignKey('user', foreignKey);
    }

    await queryRunner.dropTable('user');
  }
}
