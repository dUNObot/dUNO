module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$advancedTextSplit[$customID;_;0]==manageparty]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$advancedTextSplit[$customID;_;1];$description[This is not your party!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[Only party owner can manage the party!] $color[#e00741] $ephemeral]
    $interactionReply[$description[Select option below:]
    $color[#e00741]
    $addActionRow
    $addButton[kickmembers_$getMemberVar[party_owner;$authorID];Kick Members;Secondary;1357363582680957141]
    $addButton[banmembers_$getMemberVar[party_owner;$authorID];Ban Members;Danger;1357363414846017618]
    $addActionRow
    $addButton[clearparty_$getMemberVar[party_owner;$authorID];Clear Party;Secondary;1357363760146157588]]
    $wait[20s]
    $interactionDelete
    `
};