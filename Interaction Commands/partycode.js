module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==partycode]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can view party code!] $color[#e00741] $ephemeral]
    $ephemeral
    $description[Your party code: \`$getMemberVar[party_code;$authorID]\`]
    $color[#e00741]
    `
};