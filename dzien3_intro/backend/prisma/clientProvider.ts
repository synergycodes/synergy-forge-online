import { PrismaClient } from "@prisma/client";

let client: PrismaClient;
const createClient = () => {
  client = new PrismaClient();
};

export const providePrismaClient = () => {
  if (!client) {
    createClient();
  }

  return client;
}
