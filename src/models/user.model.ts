import { Pool, RowDataPacket } from 'mysql2/promise';
import { ICreated, IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (username: string, vocation: string, level: number, password: string) => {
    const [row] = await this.connection.execute<ICreated & RowDataPacket[]>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES(?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return row.insertId;
  };

  login = async (username: string) : Promise<IUser> => {
    const [[row]] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      `SELECT * FROM Trybesmith.users as u
      WHERE u.username = ?`,
      [username],
    );

    return row;
  };
}