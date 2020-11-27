import { Assessment, Language } from "nexus-plugin-prisma/client"
import { AssessmentService } from "./assessment.service"

const assessmentArray: Assessment[] = [
  {
    id: "1",
    languageId: "1",
    comprehensionLevel: "BEGINNER",
    writtenLevel: "FAIR",
    spokenLevel: "GOOD",
  },
  {
    id: "2",
    languageId: "2",
    comprehensionLevel: "EXCELLENT",
    writtenLevel: "VERY_GOOD",
    spokenLevel: "EXCELLENT",
  },
]
const assessmentService = new AssessmentService()
describe("allAssessments", () => {
  it("Should return an array of all language assessments found in DB", async () => {
    await expect(assessmentService.allAssessments()).resolves.toMatchObject(
      assessmentArray,
    )
  })
})
