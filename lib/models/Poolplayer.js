const pool = require('../utils/pool');

module.exports = class Poolplayer {
  id;
  name;
  age;
  cue;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.cue = row.cue;
  }

  static async insert({ name, age, cue }) {
    const { rows } = await pool.query(
      `
            INSERT INTO
              poolplayers (name, age, cue)
            VALUES
              ($1, $2, $3)
            RETURNING
              *
            `,
      [name, age, cue]
    );

    return new Poolplayer(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(
      `
          SELECT
            *
          FROM
            poolplayers
            `,
    );
    return rows.map(((row) => new Poolplayer(row)));
  }
  
  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT 
        *
      FROM
        poolplayers
      WHERE
        id=$1
      `,
      [id]
    );

    return new Poolplayer(rows[0]);
  }

  static async updateById(id, attributes) {
    const existingPlayer = await Poolplayer.findById(id);
    const updatedAttributes = { ...existingPlayer, ...attributes };
    const { name, age, cue } = updatedAttributes;
    const { rows } = await pool.query(
      `
      UPDATE
        poolplayers
      SET
        name=$1,
        age=$2,
        cue=$3
      WHERE
        id=$4
      RETURNING
        *
      `,
      [name, age, cue, id]
    );
    return new Poolplayer(rows[0]);
  } 
};
