module.exports = {
    code: `
    $onlyIf[$getMemberVar[inparty;$authorID]!=false;$description[You don't have a party yet!] $color[#e00741] $ephemeral]
    $onlyIf[$getMemberVar[party_owner;$authorID]==$authorID;$description[You are not party owner!] $color[#e00741] $ephemeral]
    $description[UNO! Choose an option below to start a new UNO game.]
    $color[#e00741]
    $addActionRow
    $addButton[playwithparty_$getMemberVar[party_owner;$authorID];Casual | Play with party;Secondary;1356261081026134067]
    $addButton[findagame_$getMemberVar[party_owner;$authorID];Casual | Find a game;Secondary;1362494698295529754]
    $addActionRow
    $addButton[findagame-ranked_$getMemberVar[party_owner;$authorID];Ranked | Find a game (COMING SOON);Secondary;1362494698295529754;true]
    `,
    data: {
        name: "play",
        description: "Starts a new game",
    },
};