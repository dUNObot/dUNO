module.exports = {
    code: `
    $onlyIf[$checkContains[$getUserVar[pending_invites;$authorID];$option[user]]!=false;You don't have an invite from this user! $ephemeral]
    You declined an invite from **$username[$option[user]]**.
    $setUserVar[pending_invites;$replace[$getUserVar[pending_invites;$authorID];$option[user];;1];$authorID]
    `,
    data: {
        name: "decline",
        description: "Declines a party invite",
        options: [
            {
                type: 6,
                name: "user",
                description: "User that you got invite from",
                required: true,
            },
        ],
    },
};