module.exports = {
    code: `
    $onlyIf[$checkContains[$getMemberVar[pending_invites;$authorID];$option[user]]!=false;$description[You don't have an invite from this user!] $color[#e00741] $ephemeral]
    $onlyIf[$checkContains[$getMemberVar[party_banned;$option[user]];$authorID]==false;$description[You are banned from this party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_count;$getMemberVar[party_owner;$option[user]]]<=10;$description[This party already has 10 members!] $color[#e00741] $ephemeral]
    $setMemberVar[inparty;true;$authorID]
    $setMemberVar[party_owner;$option[user];$authorID]
    $setMemberVar[pending_invites;$replace[$getMemberVar[pending_invites;$authorID];$option[user];;1];$authorID]
    $setMemberVar[party_count;$sum[$getMemberVar[party_count;$getMemberVar[party_owner;$authorID]];1];$getMemberVar[party_owner;$authorID]]
    $setMemberVar[party;$getMemberVar[party;$getMemberVar[party_owner;$authorID]],$authorID;$getMemberVar[party_owner;$authorID]]
    $interactionReply[
    $description[<@$authorID>, you accepted a party invite from **$username[$option[user]]**.]
    $color[#e00741]]
    $wait[20s]
    $interactionDelete
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