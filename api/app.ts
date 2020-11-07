import { use, server, on } from "nexus"
import { prisma } from "nexus-plugin-prisma"
import cors from "cors"

// Enables the Prisma plugin
use(prisma({}))

// Enabling cors
server.express.use(cors())

// In here we'll load things like configurations and launch cron jobs if any
on.start(async (data) => {})
