import { use, server, on, log } from "nexus"
import { prisma } from "nexus-plugin-prisma"
import { shield } from "nexus-plugin-shield"
import cors from "cors"

// Enables the Prisma plugin
use(prisma({}))

// Enabling graphql shield plugin
use(
  shield({
    rules: {},
    options: {
      fallbackError: (error: any) => {
        // Preferably augment this to use something like sentry to handle all unexpected internal errors
        log.error(error)
        // Then return just a simple generalized one to the client
        return new Error("Internal server error")
      },
    },
  }),
)

// Enabling cors
server.express.use(cors())

// In here we'll load things like configurations and launch cron jobs if any
on.start(async (data) => {})
