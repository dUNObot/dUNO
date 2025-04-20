module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$customID==refreshparty]
    $onlyIf[$authorID==$advancedTextSplit[$customID;_;1];$description[This is not your command!] $color[#e00741] $ephemeral]
    $arrayLoad[arr;,;$getMemberVar[party;$getMemberVar[party_owner;$authorID]]]
    $arrayLoad[newArr]
    $arrayForEach[arr;i;$arrayPush[newArr;$if[$getMemberVar[party_owner;$authorID]==$env[i];* $username[$env[i]] (owner);* $username[$env[i]]]]]
    $let[users;$arrayJoin[newArr;\n]]
    $interactionUpdate[*Refreshed*
    $description[Your party members:\n$get[users]\nMembers count: $getMemberVar[party_count;$getMemberVar[party_owner;$authorID]]/10]
    $color[#e00741]
    $if[$getMemberVar[party_owner;$authorID]==$authorID;
    $addActionRow
    $addButton[partycode_$getMemberVar[party_owner;$authorID];View Code;Secondary;1356261149427110101]
    $addButton[refreshparty;Refresh Party;Secondary;1357363760146157588]
    $addActionRow
    $addButton[manageparty_$getMemberVar[party_owner;$authorID];Manage Members;Secondary;1356261081026134067]
    $addButton[deleteparty_$getMemberVar[party_owner;$authorID];Delete Party;Danger;1356261123392929984]
    ;
    $addActionRow
    $addButton[refreshparty;Refresh Party;Secondary;1357363760146157588]]]
    `
};