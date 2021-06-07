const express = require("express");
const config = require("config");
const childProcess = require("child_process");
const createError = require("http-errors");

const { promisify } = require("util");
const ejs = require("ejs");
const e = require("express");

const exec = promisify(childProcess.exec);

const router = express.Router();

const {
  exec: { scripts },
} = config;

/* GET users listing. */
router.get("/:scriptName", async function (req, res, next) {
  try {
    const { scriptName } = req.params;
    const script = scripts[scriptName];

    if (!script) throw createError(404, "script not found");

    const params = req.query || {};

    let cmdQuery = "";

    try {
      cmdQuery = ejs.render(script.run, params);
    } catch (e) {
      throw createError(400, "missing params for the script", e);
    }
    const result = childProcess.execSync(cmdQuery);

    res.send(result.toString());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
