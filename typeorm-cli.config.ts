import { Coffee } from 'src/coffees/entities/coffees.entities';
import { Flavor } from 'src/coffees/entities/flavor.entities';
import { CoffeeRefactor1691669724476 } from 'src/migrations/1691669724476-CoffeeRefactor';
// import { SchemaSync1691670757232 } from 'src/migrations/1691670757232-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'youruser',
  password: 'yourpassword',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1691669724476],
});
