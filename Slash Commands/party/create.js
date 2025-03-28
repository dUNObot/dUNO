module.exports = {
    code: `
    $onlyIf[$getUserVar[inparty;$authorID]!=true;You are already in a party! $ephemeral]
    $setUserVar[inparty;true;$authorID]
    $setUserVar[party_owner;$authorID;$authorID]
    $setUserVar[party;$authorID;$authorID]
    $if[$getUserVar[party_code;$getUserVar[party_owner;$authorID]]==none;$setUserVar[party_code;$randomString[7];$getUserVar[party_owner;$authorID]]]
    $setGuildVar[party_codes;$getUserVar[party_code;$getUserVar[party_owner;$authorID]]:$getUserVar[party_owner;$authorID],$replace[$getGuildVar[party_codes;$guildID];none;;];$guildID]
    Successfully created new party!
    `,
    data: {
        name: "create",
        description: "Creates a new party",
    },
};