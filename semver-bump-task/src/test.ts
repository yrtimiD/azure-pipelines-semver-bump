import path from "path";
import * as process from "process";
import * as mockrun from "azure-pipelines-task-lib/mock-run";

process.env["VERSION"] = "1.1.1-pre.1";

let taskPath = path.join(__dirname, "index.js");
let runner = new mockrun.TaskMockRunner(taskPath);

runner.setInput("VersionVariable", "Version");
runner.setInput("IncrementLevel", "prepatch");
runner.setInput("PreId", "rc");

runner.run();
console.log(process.env["VERSION"]);
