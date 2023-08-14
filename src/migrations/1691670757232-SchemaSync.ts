import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1691670757232 implements MigrationInterface {
  name = 'SchemaSync1691670757232';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "tile"`);
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "name"`);
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "tile" character varying NOT NULL`,
    );
  }
}
