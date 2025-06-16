import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  async create(program: Omit<Program, "id">) {
    // Execute the SQL INSERT query to add a new category to the "category" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO program (title) VALUES (?)",
      [program.title],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");

    // Return the array of programs
    return rows as Program[];
  }
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM program WHERE id = ?",
      [id],
    );

    // Return the array of programs
    return rows[0] as Program[];
  }

  async update(program: Program) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE program SET title = ? WHERE id = ?",
      [program.title, program.id],
    );
    // Return how many rows were affected
    return result.affectedRows;
  }

  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "delete from program where id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new ProgramRepository();
