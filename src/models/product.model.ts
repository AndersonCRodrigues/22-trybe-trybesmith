import { Pool, RowDataPacket } from 'mysql2/promise';
import { ICreated, IProdCreated, IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (name: string, amount: string): Promise<IProdCreated> => {
    const row = await this.connection.execute<ICreated & RowDataPacket[]>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES(?, ?)',
      [name, amount],
    );

    const result = {
      id: row[0].insertId,
      name,
      amount,
    };
    return result;
  };

  getAll = async () : Promise<IProduct[]> => {
    const [row] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );

    return row;
  };
}