module.exports = {
    code: `
    $onlyIf[$getMemberVar[inparty;$authorID]!=false;$description[You don't have a party yet!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[You are not party owner!] $color[#e00741] $ephemeral]
    $onlyIf[$option[user]!=$authorID;$description[You can't add yourself to the party!] $color[#e00741] $ephemeral]
    $onlyIf[$isBot[$option[user]]!=true;$description[You can't add bots to the party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[inparty;$option[user]]!=true;$description[This user is already in a party!] $color[#e00741] $ephemeral]
    $onlyIf[$checkContains[$getMemberVar[pending_invites;$option[user]];$authorID]==false;$description[This user already has an invite from you!] $color[#e00741] $ephemeral]
    $onlyIf[$checkContains[$getMemberVar[party_banned;$getMemberVar[party_owner;$authorID]];$option[user]]==false;$description[This user is banned from your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_count;$getMemberVar[party_count;$getMemberVar[party_owner;$authorID]]]<=10;$description[Your party already has 10 members!] $color[#e00741] $ephemeral]
    $setMemberVar[pending_invites;$authorID,$getMemberVar[pending_invites;$option[user]];$option[user]]
    <@$option[user]>
    $description[**$username[$authorID]** invites you to the party!\nType \`/party accept @$username[$authorID]\` to accept \nor \`/party decline @$username[$authorID]\` to decline the request.]
    $color[#e00741]
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