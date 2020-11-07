import { schema } from "nexus"

schema.interfaceType({
  name: "ApiError",
  definition(t) {
    t.resolveType(() => null)
    t.string("code")
    t.string("message")
  },
})
