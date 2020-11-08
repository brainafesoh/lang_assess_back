import { log, schema } from "nexus"

/**
 * Extend the general "Query" type to add those of the assessment module
 */
schema.extendType({
  type: "Query",
  definition(t) {
    /**
     * All Assessments
     */
    t.field("allAssessments", {
      type: "Assessment",
      list: true,
      resolve: async (_parent, _args, ctx) => {
        try {
          return
        } catch (error) {
          log.error(error)
          return error
        }
      },
    })

    /**
     * Get a language assessment by id
     */
    t.field("assessmentById", {
      type: "Assessment",
      args: {
        id: schema.stringArg({ required: true }),
      },
      resolve: async (parent, args, ctx) => {
        try {
          return
        } catch (error) {
          log.error(error)
          return error
        }
      },
    })
  },
})
