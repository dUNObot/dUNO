module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==banparty]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can ban party members!] $color[#e00741] $ephemeral]
    $arrayLoad[party;,;$getMemberVar[party;$getMemberVar[party_owner;$authorID]]]
    $arrayLoad[selected;,;$selectMenuValues[;,]]
    $arrayLoad[newArr]
    $arrayForEach[selected;user;
    $setMemberVar[party_banned;$getMemberVar[party_banned;$getMemberVar[party_owner;$authorID]],$env[user];$getMemberVar[party_owner;$authorID]]
    $deleteMemberVar[inparty;$env[user]]
    $deleteMemberVar[party_owner;$env[user]]
    $setMemberVar[party_count;$sub[$getMemberVar[party_count;$getMemberVar[party_owner;$authorID]];1];$getMemberVar[party_owner;$authorID]]
    $setMemberVar[party;$replace[$getMemberVar[party;$getMemberVar[party_owner;$authorID]];,$env[user];;1];$getMemberVar[party_owner;$authorID]]
    $arrayPush[newArr;* $username[$env[user]]]
    ]
    $interactionReply[
    $description[Banned members:\n$arrayJoin[newArr;\n]]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
    `
};