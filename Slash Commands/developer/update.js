module.exports = {
  code: `
    $onlyIf[$or[$authorID==1273256222715285527;$authorID==1081603071118938123]==true;
      $ephemeral
      You are not allowed to use this command
    ]
    $updateApplicationCommands
    $ephemeral
    $color[#8E44AD]
    $author[$username[$authorID];$userAvatar]
    $description[Updated The Bot!]
    $title[Your welcome!]
  `,
  data: {
    name: "update",
    description: "updates the bot and registers new commands and updates current ones",
  },
};