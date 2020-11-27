import { Language } from "nexus-plugin-prisma/client"
import { LanguageRepo } from "./language.repo"
import { LanguageService } from "./language.service"

const languageArray: Language[] = [
  { code: "en", id: "1" },
  { code: "fr", id: "2" },
  { code: "de", id: "3" },
]
const languageRepo = new LanguageRepo(
  async (id: string) => {
    const language = languageArray.find((lang) => lang.id == id)
    return language ?? null
  },
  async () => languageArray,
)
const languageService = new LanguageService(languageRepo)

describe("allLanguages", () => {
  it("Should return an array of all languages found in DB", async () => {
    await expect(languageService.allLanguages()).resolves.toMatchObject(
      languageArray,
    )
  })
})
