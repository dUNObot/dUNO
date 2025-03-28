module.exports = {
    code: `
    $onlyIf[$getUserVar[inparty;$authorID]!=false;You don't have a party yet! $ephemeral]
    $arrayLoad[arr;,;$getUserVar[party;$getUserVar[party_owner;$authorID]]]
    $arrayLoad[newArr]
    $arrayForEach[arr;i;$arrayPush[newArr;$if[$getUserVar[party_owner;$authorID]==$env[i];* $username[$env[i]] (owner);* $username[$env[i]]]]]
    $let[users;$arrayJoin[newArr;\n]]
    Your party members:\n$get[users]
    $addActionRow
    $addButton[partycode;View party code;Secondary]
    `,
    data: {
        name: "view",
        description: "Views your current party",
    },
};