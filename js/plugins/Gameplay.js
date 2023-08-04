/*:
 * @plugindesc Gameplay of the jam
 * @author Xwilarg
 */

(function() {
    addEventListener("keypress", (event) => {
        if (event.code === "Space") {
            try
            {
                for (let m of $gameParty.members()) {
                    m.die();
                }
            }
            catch (e)
            {
                console.error(e);
            }
        }
    });
})();