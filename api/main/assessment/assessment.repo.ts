import { log } from "nexus"
import { Assessment } from "nexus-plugin-prisma/client"
import { PrismaRepo } from "../../utils/prisma.repo"

/**
 * Repository representing DB access layer for Assessment
 */
export class AssessmentRepo {
  constructor(public findAll: () => Promise<Assessment[]>) {}
}

/**
 * Implementation of AssessmentRepo using prisma
 */
export class AssessmentRepoPrisma extends PrismaRepo implements AssessmentRepo {
  async findAll() {
    try {
      const assessments = await this.prisma.instance.assessment.findMany()
      return assessments
    } catch (error) {
      log.error(error)
      return error
    }
  }
}
