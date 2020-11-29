import { schema } from "nexus"

/**
 * Extend the general Graphql "Mutation" type in order
 * to add those of the assessment module
 */
schema.extendType({
  type: "Mutation",
  definition(t) {
    /**
     * Mutation to record an assessment for a given language
     */
    t.field("createAssessment", {
      type: "Assessment",
      args: {
        input: schema.arg({ type: "AssessmentCI", required: true }),
      },
    })

    /**
     * Mutation to update a language assessment, based on it's id
     */
    t.field("updateAssessment", {
      type: "Assessment",
      args: {
        input: schema.arg({ type: "AssessmentUI", required: true }),
      },
    })

    /**
     * Mutation to delete an assessment
     */
    t.field("deleteAssessment", {
      type: "Assessment",
      args: {
        id: schema.stringArg({ required: true }),
      },
    })
  },
})
