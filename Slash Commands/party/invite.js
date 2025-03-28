module.exports = {
    code: `
    $onlyIf[$getUserVar[inparty;$authorID]!=false;You don't have a party yet! $ephemeral]
    $onlyIf[$getUserVar[party_owner;$authorID]==$authorID;You are not party owner! $ephemeral]
    $onlyIf[$option[user]!=$authorID;You can't add yourself to the party! $ephemeral]
    $onlyIf[$isBot[$option[user]]!=true;You can't add bots to the party! $ephemeral]
    $onlyIf[$getUserVar[inparty;$option[user]]!=true;This user is already in a party! $ephemeral]
    $onlyIf[$checkContains[$getUserVar[pending_invites;$option[user]];$authorID]==false;This user already has an invite from you! $ephemeral]
    <@$option[user]>\n**$username[$authorID]** invites you to the party!\nType \`/party accept @$username[$authorID]\` to accept \nor \`/party decline @$username[$authorID]\` to decline the request.
    $setUserVar[pending_invites;$authorID,$getUserVar[pending_invites;$option[user]];$option[user]]
    `,
    data: {
        name: "invite",
        description: "Adds a user to your party",
        options: [
            {
                type: 6,
                name: "user",
                description: "User to add",
                required: true,
            },
        ],
    },
};