module.exports = {
    code: `
    $onlyIf[$checkContains[$getMemberVar[pending_invites;$authorID];$option[user]]!=false;$description[You don't have an invite from this user!] $color[#e00741] $ephemeral]
    $setMemberVar[pending_invites;$replace[$getMemberVar[pending_invites;$authorID];$option[user];;1];$authorID]
    $interactionReply[
    $description[<@$authorID>, you declined a party invite from **$username[$option[user]]**.]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
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