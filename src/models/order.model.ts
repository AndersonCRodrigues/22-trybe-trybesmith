import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async () : Promise<IOrder[]> => {
    const [row] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.user_id, JSON_ARRAYAGG(p.id)
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products p
      ON o.id = p.order_id`,
    );

    return row;
  };
}