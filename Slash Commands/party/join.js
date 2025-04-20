module.exports = {
    code: `
    $onlyIf[$getMemberVar[inparty;$authorID]!=true;$description[You are already in a party!] $color[#e00741] $ephemeral]
    $onlyIf[$checkContains[$getGuildVar[party_codes;$guildID];$option[code]]==true;$description[Invalid code provided!] $color[#e00741] $ephemeral]
    $arrayLoad[codesArr;,;$getGuildVar[party_codes;$guildID]]
    $arrayForEach[codesArr;code;$if[$checkContains[$env[code];$option[code]]==true;$let[partyOwner;$advancedTextSplit[$env[code];:;1]]]]
    $onlyIf[$checkContains[$getMemberVar[party_banned;$get[partyOwner]];$authorID]==false;$description[You are banned from this party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_count;$get[partyOwner]]<=10;$description[This party already has 10 members!] $color[#e00741] $ephemeral]
    $setMemberVar[inparty;true;$authorID]
    $setMemberVar[party_owner;$get[partyOwner];$authorID]
    $setMemberVar[party_count;$sum[$getMemberVar[party_count;$getMemberVar[party_owner;$authorID]];1];$getMemberVar[party_owner;$authorID]]
    $setMemberVar[party;$getMemberVar[party;$getMemberVar[party_owner;$authorID]],$authorID;$getMemberVar[party_owner;$authorID]]
    $interactionReply[
    $description[<@$authorID>, you joined **$username[$getMemberVar[party_owner;$authorID]]**'s party!]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
    `,
    data: {
        name: "join",
        description: "Joins a party using given code",
        options: [
            {
                type: 3,
                name: "code",
                description: "Party code",
                required: true,
            },
        ],
    },
};