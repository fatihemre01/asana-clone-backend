const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "project-service" },
  transports: [
    new winston.transports.File({
      filename: "logs/projects/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/projects/info.log",
      level: "info",
    }),
    new winston.transports.File({ filename: "logs/projects/combined.log" }),
  ],
});

module.exports = logger;
