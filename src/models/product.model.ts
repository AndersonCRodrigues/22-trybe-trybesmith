import { Pool, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(name: string, amount: string): Promise<IProduct[]> {
    const [row] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'INSERT INTO Trybesmith.products(name, amout) VALUES(?, ?)',
      [name, amount],
    );

    return row;
  }
}