module.exports = {
    code: `
    $onlyIf[$getUserVar[inparty;$authorID]!=true;You are already in a party! $ephemeral]
    $onlyIf[$checkContains[$getGuildVar[party_codes;$guildID];$option[code]]==true;Invalid code provided! $ephemeral]
    $arrayLoad[codesArr;,;$getGuildVar[party_codes;$guildID]]
    $arrayForEach[codesArr;code;$if[$checkContains[$env[code];$option[code]]==true;$let[partyOwner;$advancedTextSplit[$env[code];:;1]]]]
    $setUserVar[inparty;true;$authorID]
    $setUserVar[party_owner;$get[partyOwner];$authorID]
    $setUserVar[party;$getUserVar[party;$getUserVar[party_owner;$authorID]],$authorID;$getUserVar[party_owner;$authorID]]
    You joined **$username[$getUserVar[party_owner;$authorID]]'s** party!
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