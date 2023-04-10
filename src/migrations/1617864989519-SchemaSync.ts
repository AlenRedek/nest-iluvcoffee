import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1617864989519 implements MigrationInterface {
  name = 'SchemaSync1617864989519';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}
