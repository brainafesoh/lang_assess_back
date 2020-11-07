import { log, schema } from "nexus"

schema.extendType({
  type: "Query",
  definition(t) {
    t.field("allLanguages", {
      type: "Language",
      list: true,
      resolve: async (parent, args, ctx) => {
        try {
        } catch (error) {
          log.error(error)
          return error
        }
      },
    })
  },
})
