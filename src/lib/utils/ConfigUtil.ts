/*
 * -----------------------------------------------------------------------------
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * -----------------------------------------------------------------------------
 * File Path				⸺ /src/lib/utils/ConfigUtil.ts
 * File Created			⸺ 2022-06-23 @ 00:09:16-05:00
 * Last Modified		⸺ 2022-06-23 @ 08:49:34-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 */

import { config } from 'dotenv'
import fs from 'fs-extra'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** A utility class for retrieving the required configuration settings. */
export class ConfigUtil {
  constructor(private dotEnvPath: string = join(__dirname, '..', '..', '..', '.env')) {}

  /**
   * Returns true or false depending on if the .env file exists in the project
   * root directory.
   */
  async dotEnvExists(): Promise<boolean> {
    return fs.pathExists(this.dotEnvPath)
  }

  /**
   * Attempts to load the `.env` file into environment variables and returns the
   * response from the **dotenv** package. If the `.env` file does not exist,
   * then `undefined` is returned.
   *
   * @returns The contents of the `.env` file or `undefined` if the file does not exist.
   */
  async loadConfig() {
    if (await this.dotEnvExists()) return config({ path: this.dotEnvPath })
    else return undefined
  }
}
