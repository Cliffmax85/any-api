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

  static async IntersectionObserverEntry({ name, age, cue }) {
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
};