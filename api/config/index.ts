import * as dotenv from "dotenv"

// read .env file, parse the contents, assign it to process.env.
dotenv.config()

/**
 * A central class to hold & distribute all app configurations
 */
export class Config {
  // Init a static Configuration object so that config is uniform everywhere in app
  static config: Config = new Config()
}
