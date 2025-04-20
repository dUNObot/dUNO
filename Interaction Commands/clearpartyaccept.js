module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==clearpartyaccept]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can ban party members!] $color[#e00741] $ephemeral]
    $let[partycode;$getMemberVar[party_code;$getMemberVar[party_owner;$authorID]]]
    $let[partyowner;$getMemberVar[party_owner;$getMemberVar[party_owner;$authorID]]]
    $arrayLoad[party;,;$getMemberVar[party;$getMemberVar[party_owner;$authorID]]]
    $arrayForEach[party;user;$onlyIf[$env[user]!=$get[partyowner]]
    $deleteMemberVar[inparty;$env[user]]
    $deleteMemberVar[party_owner;$env[user]]
    ]
    $interactionReply[
    $description[Party successfully cleared!]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
    `
};