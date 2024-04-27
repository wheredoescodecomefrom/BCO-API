interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isDiscordConnected: boolean;
  discordId: string;
  discordUsername: string;
  discordAvatar: string;
  createdAt: Date;
  updatedAt: Date;
}