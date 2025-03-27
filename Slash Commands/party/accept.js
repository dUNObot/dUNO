module.exports = {
    code: `
    $onlyIf[$checkContains[$getUserVar[pending_invites;$authorID];$option[user]]!=false;You don't have an invite from this user!]
    You accepted an invite from **$username[$option[user]]**.
    $setUserVar[inparty;true;$option[user]]
    $setUserVar[inparty;true;$authorID]
    $setUserVar[party_owner;$option[user];$authorID]
    $setUserVar[party_owner;$option[user];$option[user]]
    $setUserVar[pending_invites;$replace[$getUserVar[pending_invites;$authorID];$option[user];;1];$authorID]
    $setUserVar[party;$if[$checkContains[$getUserVar[pending_invites;$option[user]];$option[user]]==true;$authorID,;$option[user],$authorID,]$getUserVar[party;$option[user]];$option[user]]
    `,
    data: {
        name: "accept",
        description: "Accepts a party invite",
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