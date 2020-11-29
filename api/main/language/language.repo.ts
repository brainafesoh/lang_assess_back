import { Language } from "nexus-plugin-prisma/client"
import { PrismaRepo } from "../../utils/prisma.repo"

/**
 * Repository representing DB access layer for Language
 */
export class LanguageRepo {
  constructor(
    public findById: (id: string) => Promise<Language | null>,
    public findAll: () => Promise<Language[]>,
  ) {}
}

/**
 * Implementation of LanguageRepo using prisma
 */
export class LanguageRepoPrisma extends PrismaRepo implements LanguageRepo {
  async findById(id: string) {
    const language = await this.prisma.instance.language.findOne({
      where: { id },
    })
    return language
  }

  async findAll() {
    const allLanguages = await this.prisma.instance.language.findMany()
    return allLanguages
  }
}
