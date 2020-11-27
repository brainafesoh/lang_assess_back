import { Assessment } from "nexus-plugin-prisma/client"
import { AssessmentRepo } from "./assessment.repo"

export class AssessmentService {
  constructor(private assessmentRepo: AssessmentRepo) {}

  /**
   * allAssessments
   */
  public async allAssessments(): Promise<Assessment[]> {
    const assessments = await this.assessmentRepo.findAll()
    return assessments
  }
}
