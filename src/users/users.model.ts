import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UsersCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UsersCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пороль'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}