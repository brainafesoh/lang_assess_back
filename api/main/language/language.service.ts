import { Language } from "nexus-plugin-prisma/client"
import { LanguageRepo } from "./language.repo"

export class LanguageService {
  constructor(private languageRepo: LanguageRepo) {}

  /**
   * allLanguages
   */
  public async allLanguages(): Promise<Language[]> {
    const allLanguages = this.languageRepo.findAll()
    return allLanguages
  }
}
