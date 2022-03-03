import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddImageProfileColumn1646167992015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "image_profile",
                type: "varchar",
                isNullable: true
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "image_profile");
    }

}
