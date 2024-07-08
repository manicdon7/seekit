var stack = require('callsite'),
    path = require('path'),
    fs = require('fs');

function getPath(nmPath, workingDir, root) {
    var pathToCheck = path.resolve(workingDir, 'node_modules', nmPath);

    if (fs.existsSync(pathToCheck)) {
        return pathToCheck;
    }

    if (workingDir === root) {
        throw new Error('Unable to resolve "' + nmPath +'"');
    }

    return getPath(nmPath, path.dirname(workingDir), root);
}

module.exports = function(nmPath) {
    var initialPath = path.dirname(stack()[1].getFileName()),
        root = path.parse(initialPath).root;
    return getPath(nmPath, initialPath, root);
};
