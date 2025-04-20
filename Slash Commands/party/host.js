module.exports = {
    code: `
    $onlyIf[$getMemberVar[inparty;$authorID]!=true;$description[You are already in a party!] $color[#e00741] $ephemeral]
    $setMemberVar[inparty;true;$authorID]
    $setMemberVar[party_owner;$authorID;$authorID]
    $setMemberVar[party;$authorID;$getMemberVar[party_owner;$authorID]]
    $setMemberVar[party_count;$sum[$getMemberVar[party_count;$getMemberVar[party_owner;$authorID]];1];$getMemberVar[party_owner;$authorID]]
    $if[$getMemberVar[party_code;$getMemberVar[party_owner;$authorID]]==none;$setMemberVar[party_code;$randomString[7];$getMemberVar[party_owner;$authorID]]]
    $setGuildVar[party_codes;$getMemberVar[party_code;$getMemberVar[party_owner;$authorID]]:$getMemberVar[party_owner;$authorID],$getGuildVar[party_codes;$guildID];$guildID]
    $interactionReply[
    $description[Successfully hosted a new party!\nUse \`/party view\` to view it.]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
    `,
    data: {
        name: "host",
        description: "Hosts a new party",
    },
};