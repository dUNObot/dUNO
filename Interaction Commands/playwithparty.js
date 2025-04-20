module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==playwithparty]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can start the game!] $color[#e00741] $ephemeral]
    $interactionReply[$startGame[party;$guildID;$channelID;$getMemberVar[party;$advancedTextSplit[$customID;_;1];$guildID]]]
    `
};