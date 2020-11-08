import { PrismaClient } from "@prisma/client"
import * as languages from "@cospired/i18n-iso-languages"

// Initialize a prisma client we'll use to talk to DB
const prisma = new PrismaClient()

async function main() {
  const allLangsCodes = Object.keys(languages.getNames("en"))
  // Seed multiple languages to DB in parallel rather than sequentially
  const allLanguages = await Promise.all(
    allLangsCodes.map((code) => {
      return new Promise((resolve) => {
        resolve(prisma.language.create({ data: { code } }))
      })
    }),
  )
  console.log("main -> allLanguages", allLanguages)
}

// Run the seeder then disconnect the prisma DB connection at end
main().finally(async () => {
  await prisma.disconnect()
})
