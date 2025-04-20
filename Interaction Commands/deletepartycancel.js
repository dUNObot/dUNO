module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==deletepartycancel]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can ban party members!] $color[#e00741] $ephemeral]
    $interactionReply[
    $description[Party deletion canceled.]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
    `
};