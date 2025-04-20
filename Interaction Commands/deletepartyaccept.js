module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==deletepartyaccept]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can ban party members!] $color[#e00741] $ephemeral]
    $let[partycode;$getMemberVar[party_code;$getMemberVar[party_owner;$authorID]]]
    $let[partyowner;$getMemberVar[party_owner;$getMemberVar[party_owner;$authorID]]]
    $arrayLoad[party;,;$getMemberVar[party;$getMemberVar[party_owner;$authorID]]]
    $arrayForEach[party;user;
    $deleteMemberVar[party;$env[user]]
    $deleteMemberVar[inparty;$env[user]]
    $deleteMemberVar[party_owner;$env[user]]
    $deleteMemberVar[party_code;$env[user]]
    $deleteMemberVar[party_count;$env[user]]
    $deleteMemberVar[party_banned;$env[user]]
    ]
    $if[$checkContains[$getGuildVar[party_codes;$guildID];$get[partycode]]==true;$setGuildVar[party_codes;$replace[$getGuildVar[party_codes;$guildID];$get[partycode]:$get[partyowner],;;1];$guildID]]
    $interactionReply[
    $description[Party successfully deleted!]
    $color[#e00741]]
    $wait[20s]
    `
};