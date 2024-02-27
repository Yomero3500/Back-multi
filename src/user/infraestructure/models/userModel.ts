import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: true
})
class UserModel extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public nombres!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public apellido_paterno!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public apellido_materno!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public password!: string;
}

export default UserModel;