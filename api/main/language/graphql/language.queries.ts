import { schema } from "nexus"
import { LanguageRepoPrisma } from "../language.repo"
import { LanguageService } from "../language.service"

schema.extendType({
  type: "Query",
  definition(t) {
    t.field("allLanguages", {
      type: "Language",
      list: true,
      resolve: async (_parent, _args, ctx) => {
        const languageService = new LanguageService(
          new LanguageRepoPrisma({ instance: ctx.db }),
        )
        const allLanguages = languageService.allLanguages()
        return allLanguages
      },
    })
  },
})
