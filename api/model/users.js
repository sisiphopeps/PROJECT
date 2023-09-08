const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/authentication");

class Users {
  async fetchUser(req, res) {
    try {
      const query = `
        SELECT userID, firstName, lastName, userDOB, userRole, profileUrl, emailAdd
        FROM Users
        WHERE userId = ?;
      `;
      const userId = req.params.id;
      const result = await db.query(query, [userId]);
      res.json({
        status: res.statusCode,
        result,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching the user." });
    }
  }

  async register(req, res) {
    try {
      const data = req.body;
      // Encrypt password
      data.userPass = await hash(data.userPass, 15);

      const user = {
        emailAdd: data.emailAdd,
        userPass: data.userPass,
      };

      // Insert user data into the database
      const query = `
        INSERT INTO Users(firstName, lastName, userDOB, userRole, emailAdd, userPass, profileUrl)
        VALUES (?, ?, ?, ?, ?, ?, ?);
      `;
      const values = [
        data.firstName,
        data.lastName,
        data.userDOB,
        data.userRole,
        data.emailAdd,
        data.userPass,
        data.profileUrl,
      ];

      await db.query(query, values);

      // Create a token
      let token = createToken(user);

      res.json({
        status: res.statusCode,
        msg: "You are now registered.",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while registering the user." });
    }
  }

  async login(req, res) {
    try {
      const { emailAdd, userPass } = req.body;

      const query = `
        SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, profileUrl, userPass
        FROM Users
        WHERE emailAdd = ?;
      `;

      const result = await db.query(query, [emailAdd]);

      if (!result?.length) {
        res.status(401).json({
          status: res.statusCode,
          msg: "You provided a wrong email.",
        });
        return;
      }

      const isPasswordValid = await compare(userPass, result[0].userPass);

      if (isPasswordValid) {
        // Create a token
        const token = createToken({ emailAdd });
        res.json({
          msg: "Logged in",
          token,
          result: result[0],
        });
      } else {
        res.status(401).json({
          status: res.statusCode,
          msg: "Invalid password or you have not registered",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while logging in." });
    }
  }

  async updateUser(req, res) {
    try {
      const data = req.body;
      if (data.userPass) {
        data.userPass = hashSync(data.userPass, 15);
      }

      const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?
      `;

      await db.query(query, [data, req.params.id]);

      res.json({
        status: res.statusCode,
        msg: "Update successful.",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while updating the user." });
    }
  }

  async deleteUser(req, res) {
    try {
      const query = `DELETE FROM Users WHERE userID = ?`;
      await db.query(query, [req.params.id]);
      res.json({
        status: res.statusCode,
        msg: "Deleted successfully.",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while deleting the user." });
    }
  }
}

module.exports = Users;
