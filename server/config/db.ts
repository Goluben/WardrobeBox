import { Pool } from "pg";

import { DB_CONF } from "../constants/index.ts";

export const pool = new Pool({
  user: DB_CONF.USER,
  host: DB_CONF.HOST,
  database: DB_CONF.DATABASE,
  password: DB_CONF.PASSWORD,
  port: DB_CONF.PORT,
});
