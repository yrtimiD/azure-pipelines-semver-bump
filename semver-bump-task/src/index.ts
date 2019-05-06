import * as task from "azure-pipelines-task-lib/task";
import * as semVer from "semver";
import { runInContext } from "vm";
import { version } from "punycode";

let versionVariable: string;
let versionValue: string;
let incrementLevel: semVer.ReleaseType;
let preId: string;
let semanticVersion: semVer.SemVer;

function prepare(): void {

	versionVariable = task.getInput("VersionVariable", true);
	incrementLevel = <semVer.ReleaseType>task.getInput("IncrementLevel", true);
	preId = task.getInput("PreId", false);
	versionValue = task.getVariable(versionVariable);
	if (!versionValue) {
		throw new Error(`Variable "${versionVariable}" doesn't contains anything. Valid version string was expected.`);
	}

	task.debug(`Using variable "${versionVariable}"`);
	task.debug(`Increment level is "${incrementLevel}" with preId "${preId}"`);
	task.debug(`Current version value is "${versionValue}"`);
}

function bump(): void {
	task.debug(`Bumping ${incrementLevel} version`);
	semanticVersion = new semVer.SemVer(versionValue);
	semanticVersion.inc(incrementLevel, preId);
	versionValue = semanticVersion.version;
}

function update(): void{
	task.setVariable(versionVariable, versionValue);
	task.setResult(task.TaskResult.Succeeded, `New version "${versionValue}" was saved back to "${versionVariable}" variable`);
}

try {
	prepare();
	bump();
	update();
} catch (err) {
	task.setResult(task.TaskResult.Failed, err);
}
