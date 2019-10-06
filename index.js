const express = require('express');
const fs = require('fs');
const discord = require('discord.js');

const app = express();
const client = new discord.Client();

const port = 8081;

app.get('/', (req, res) => {
  let file = fs.readFileSync('data.json');
  let data = JSON.parse(file);
  let out = '';

  data['count']++;
  out = `Page has been loaded ${data['count']} times`;

  fs.writeFileSync('data.json', JSON.stringify(data));

  res.send(out);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NjA4Mjk0NDA5MDg3NDgzOTE0.XZm9-g.s08mBNAcrcQyNafeDsoeJgj5v_U');
*/
