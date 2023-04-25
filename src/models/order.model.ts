import { Pool, RowDataPacket } from 'mysql2/promise';
import { ICreated, IOrder, IUpdate } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async () : Promise<IOrder[]> => {
    const [row] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id,
        o.user_id as userId,
        JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products as p
      ON o.id = p.order_id
      GROUP BY p.order_id`,
    );
    return row;
  };

  create = async (id: number) => {
    const [[row]] = await this.connection.execute<ICreated[] & RowDataPacket[]>(
      'INSERT INTO Trybesmith.orders(user_id) VALUES(?)',
      [id],
    );

    return row.insertId;
  };

  updateProduct = async (id: number, productsIds: number[]) : Promise<IUpdate> => {
    const orderId = await this.create(id);

    productsIds.forEach(async (productId) => {
      await this.connection.execute<RowDataPacket[]>(
        `UPDATE Trybesmith.products
        SET order_id = ?
        WHERE id = ?`,
        [orderId, productId],
      );
    });

    return { userId: id, productsIds };
  };
}