import { PrismaClientInstance } from "nexus-plugin-prisma/dist/settings"

/**
 * Base repository implementation class using Prisma
 */
export class PrismaRepo {
  constructor(public prisma: PrismaClientInstance) {}
}
