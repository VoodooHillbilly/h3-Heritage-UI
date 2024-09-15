const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

module.exports = function AutoSuitSorter3000(controller) {
const allUnlockables = controller.configManager.configs.allunlockables
allUnlockables.forEach(unlockable => {
    if (unlockable.Type === "disguise") {
        const validSubtypes = ["disguise", "S0", "S1", "S2", "S3", "S4", "S5", "S6", "S7"];
        if (!validSubtypes.includes(unlockable.Subtype)) {
            unlockable.Subtype = "S8";
        }
    }
});
    controller.configManager.configs.allunlockables =allUnlockables
}
