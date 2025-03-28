module.exports = {
    type: "interactionCreate",
    code: `
    $onlyIf[$customID==partycode]
    $onlyIf[$getUserVar[party_owner;$authorID]==$authorID;Only party owner can view party code! $ephemeral]
    $ephemeral
    Your party code: \`$getUserVar[party_code;$authorID]\`
    `
}