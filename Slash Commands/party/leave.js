module.exports = {
    code: `
    $onlyIf[$getMemberVar[inparty;$authorID]!=false;$description[You are not in a party!] $color[#e00741] $ephemeral]
    $deleteMemberVar[inparty;$authorID]
    $let[partyowner;$getMemberVar[party_owner;$authorID]]
    $deleteMemberVar[party_owner;$authorID]
    $setMemberVar[party_count;$sub[$getMemberVar[party_count;$get[partyowner]];1];$get[partyowner]]
    $setMemberVar[party;$replace[$getMemberVar[party;$get[partyowner]];,$authorID;;1];$get[partyowner]]
    $interactionReply[
    $description[<@$authorID>, you left **$username[$get[partyowner]]**'s party!]
    $color[#e00741];true]
    $wait[20s]
    $interactionDelete
    `,
    data: {
        name: "leave",
        description: "Leaves the current party",
    },
};