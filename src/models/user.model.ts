import { Pool, RowDataPacket } from 'mysql2/promise';
import { ICreated } from '../interfaces';
import createToken from '../utils/auth';

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

    const id = row.insertId;

    return createToken(id);
  };
}