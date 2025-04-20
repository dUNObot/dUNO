module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==clearparty]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can clear the party!] $color[#e00741] $ephemeral]
    $description[<@$authorID>, are you sure you want to clear your party?\n(This will remove all party members, excluding party owner)]
    $color[#e00741]
    $addActionRow
    $addButton[clearpartyaccept_$getMemberVar[party_owner;$authorID];Accept;Success;1356656624705470596]
    $addButton[clearpartycancel_$getMemberVar[party_owner;$authorID];Cancel;Danger;1356656662366388557]
    `
};