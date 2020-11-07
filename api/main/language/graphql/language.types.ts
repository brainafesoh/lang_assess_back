import { schema } from "nexus"

schema.objectType({
  name: "Language",
  definition(t) {
    t.model.id()
    t.model.code()
  },
})
