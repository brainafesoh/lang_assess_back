import { schema } from "nexus"

// Defining the language assessment graphql type
schema.objectType({
  name: "Assessment",
  definition(t) {
    t.model.id()
    t.model.language()
    t.model.writtenLevel()
    t.model.spokenLevel()
    t.model.comprehensionLevel()
  },
})

// Defining a graphql type to hold input data for a language assessment creation
schema.inputObjectType({
  name: "AssessmentCI",
  definition(t) {
    t.string("languageId", { required: true })
    t.field("writtenLevel", { type: "AssessmentLevel", required: true })
    t.field("spokenLevel", { type: "AssessmentLevel", required: true })
    t.field("comprehensionLevel", { type: "AssessmentLevel", required: true })
  },
})

// Defining a gql type to hold input infos for a language assessment update
schema.inputObjectType({
  name: "AssessmentUI",
  definition(t) {
    t.string("id", { required: true })
    t.field("writtenLevel", { type: "AssessmentLevel" })
    t.field("spokenLevel", { type: "AssessmentLevel" })
    t.field("comprehensionLevel", { type: "AssessmentLevel" })
  },
})
