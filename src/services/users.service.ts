import query from '../models/db';
import { User } from '../models/users.model';

export class UsersService {
  async getUsers(): Promise<User[]> {
    const sql = 'SELECT * FROM users';
    const users = await query(sql);
    return users;
  }

  async getUser(id: number): Promise<User> {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const user = await query(sql, [id]);
    return user[0];
  }

  async createUser(user: User): Promise<User> {
    const sql = 'INSERT INTO users (name, email, password, isDiscordConnected, discordId, discordUsername, discordAvatar, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const createdUser = await query(sql, [
      user.name,
      user.email,
      user.password,
      user.isDiscordConnected,
      user.discordId,
      user.discordUsername,
      user.discordAvatar,
      user.createdAt,
      user.updatedAt,
    ]);
    return createdUser[0];
  }
  async updateUser(user: User): Promise<User> {
    const sql = 'UPDATE users SET name = ?, email = ?, password = ?, isDiscordConnected = ?, discordId = ?, discordUsername = ?, discordAvatar = ?, updatedAt = ? WHERE id = ?';
    const updatedUser = await query(sql, [
      user.name,
      user.email,
      user.password,
      user.isDiscordConnected,
      user.discordId,
      user.discordUsername,
      user.discordAvatar,
      user.updatedAt,
      user.id,
    ]);
    return updatedUser[0];
  }
  async deleteUser(id: number): Promise<void> {
    const sql = 'DELETE FROM users WHERE id = ?';
    await query(sql, [id]);
  }
}