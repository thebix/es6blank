import { log, l, logLevel } from './logger'
import _config from './config'
import lib from './lib/index'

log(`Start server ${_config.isProduction ? '<Production>' : '<Debug>'}`, logLevel.INFO)
