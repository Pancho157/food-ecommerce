import log4js from "log4js";

log4js.configure({
  appenders: {
    console: { type: "console" },
    errorsFile: { type: "file", filename: "./logger/logs/errors.log" },
    debugFile: { type: "file", filename: "./logger/logs/debug.log" },
    warnFile: { type: "file", filename: "./logger/logs/warnings.log" },

    consoleLogger: {
      type: "logLevelFilter",
      appender: "console",
      level: "info",
    },

    consoleLoggerAll: {
      type: "logLevelFilter",
      appender: "console",
      level: "trace",
    },

    errorsLogger: {
      type: "logLevelFilter",
      appender: "errorsFile",
      level: "error",
      maxLevel: "error",
    },

    warnsLogger: {
      type: "logLevelFilter",
      appender: "warnFile",
      level: "warn",
      maxLevel: "warn",
    },
  },

  categories: {
    default: { appenders: ["consoleLogger"], level: "all" },

    dev: { appenders: ["consoleLoggerAll"], level: "all" },

    prod: {
      appenders: ["consoleLogger", "errorsLogger", "warnsLogger"],
      level: "all",
    },
  },
});

const env = process.env.ENV || "dev";
let logger = log4js.getLogger(env.toLowerCase());

export default logger;
