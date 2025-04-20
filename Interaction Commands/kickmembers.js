module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==kickmembers]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can kick party members!] $color[#e00741] $ephemeral]
    $arrayLoad[arr;,;$getMemberVar[party;$getMemberVar[party_owner;$authorID]]]
    $onlyIf[$arrayLength[arr]>1;$description[No members to kick!] $color[#e00741] $ephemeral]
    $description[Select members to kick from your party:]
    $color[#e00741]
    $arrayLoad[noOwnerArr]
    $arrayForEach[arr;user;$if[$env[user]!=$getMemberVar[party_owner;$authorID];$arrayPush[noOwnerArr;$env[user]]]]
    $addActionRow
    $addStringSelectMenu[kickparty_$getMemberVar[party_owner;$authorID];Members to kick;false;1;$arrayLength[noOwnerArr]]
    $arrayForEach[noOwnerArr;member;$addOption[$username[$env[member]];;$env[member]]]
    `
};