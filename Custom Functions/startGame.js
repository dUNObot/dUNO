module.exports = {
    name: "startGame",
    params: ["type", "guild", "channel", "playersArr"],
    code: `
    $env[guild]-$env[type]-$env[playersArr]
    $arrayLoad[players;,;$env[playersArr]]
    $if[$env[type]==party]
    $arrayForEach[players;plr;$setMemberVar[playing;true;$env[plr];$env[guild]]]
    `
};