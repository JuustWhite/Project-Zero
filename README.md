<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Project Zero" src="https://i.postimg.cc/yN20tWBJ/IMG-20200731-101822.jpg">  


## Gin-san

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://bit.ly/2NtdTWy)
[![Language](https://img.shields.io/badge/Language-Node.js-red?style=for-the-badge&logo=node.js)](https://nodejs.org/en/about/)
[![Discord](https://img.shields.io/discord/691741711814098994?color=7289da&label=discord&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/ZsSx8XB)
[![Discord Bots](https://top.gg/api/widget/524873335864033290.svg)](https://top.gg/bot/524873335864033290)

- Self-Hosting questions for this bot will not be assisted by the bot developer.
- Code Errors, Bugs may be assisted by the developer but not prioritized.
- This bot repository will be updated whenever the developer feels like updating it.
- This repository only has few commands than the main repository which has over 200+ commands. Inviting the BOT will be much appreciated.
- Begging/Asking for the main bot's source code is not possible.



## Invite Links
- [Discord Server](https://discord.gg/ZsSx8XB)
- [BOT Invite with 200+ Commands](https://discord.com/oauth2/authorize?client_id=524873335864033290&scope=bot&permissions=805314614)

## Installation
- ```git clone https://github.com/Zeroo000/Project-Zero```
- ```cd Project-Zero```
- Fill up ```config.json```
- ```npm i``` to install dependencies.
- ```node .``` to run the bot.


## API Keys
- [How to get YouTube API](https://developers.google.com/youtube/v3/getting-started)
- [Genius Lyrics API](https://genius.com/api-clients/new)
- [NewsAPI.org](https://newsapi.org/)
- [Tenor API](https://tenor.com/developer/keyregistration)

## Node.js Installation
- [Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)
- [Debian](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9)

### Commands

- BOT Prefix: `p`

- Music

| Command       | Description                                                                                                               | Usage                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| join         | Joins on voice channel where the user is.                                                                                 | join
| play         | Play any song or playlist from youtube, you can do it by searching for a song by name or song url or playlist url         | play darude sandstorm |
| pause        | Pause the current playing song                                                                                            | pause                 |
| resume       | Resume the current paused song                                                                                            | resume                |
| leave        | Leaves voice channel if in one                                                                                            | leave                 |
| remove       | Remove a specific song from queue by its number in queue                                                                  | remove 4              |
| queue        | Display the song queue                                                                                                    | queue                 |
| shuffle      | Shuffle the song queue                                                                                                    | shuffle               |
| skip         | Skip the current playing song                                                                                             | skip                  |
| skipall      | Skip all songs in queue                                                                                                   | skipall               |
| skipto       | Skip to a specific song in the queue, provide the song number as an argument                                              | skipto 5              |
| volume       | Adjust song volume                                                                                                        | volume 80             |
| music-trivia | Engage in a music trivia with your friends. You can add more songs to the trivia pool in resources/music/musictrivia.json | music-trivia          |
| loop         | Loop the currently playing song                                                                                           | loop 5                 |
| lyrics       | Get lyrics of any song or the lyrics of the currently playing song                                                        | lyrics song-name      |
| now-playing       | Display the current playing song with a playback bar                                                                 | now-playing       |

- Moderation

| Command       | Description                                                                                                               | Usage                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| addrole       | Adds a specific role on the user inputed.                                                                                 | addrole @Zero'#2726 @Member
| ban           | Bans a mentioned user.                                                                                                    | ban @Zero'#2726 Bad |
| delmsg        | Deletes up to 99 messages.                                                                                                | delmsg 99             |
| kick          | Kicks a mentioned user.                                                                                                   | kick @Zero'#2726 Bad              |
| removerole    | Removes a role from mentioned user.                                                                                       | removerole @Zero'#2726 @Member                 |
| say           | Repeats what you typed in the chat.                                                                                       | say I'm beautiful.              |
| strawpoll     | Generates a Strawpoll with the options you provide.                                                                       | strawpoll [Procedures will be shown] |

- Others

| Command       | Description                                                                                                               | Usage                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| 8ball         | 8 Ball answers.                                                                                                           | 8ball Am I a beautiful butterfly?
| animegif      | Gets an anime gif.                                                                                                        | animegif jojo          |
| avatar        | Gets the avatar of mentioned user.                                                                                        | avatar @Zero'#2726     |
| botinfo       | Shows BOT information.                                                                                                    | botinfo                |
| chucknorris   | Satirical Fact about Chuck Norris                                                                                         | chucknorris            |
| fortune       | Fortune Cookie.                                                                                                           | fortune                |
| gif           | Sends a gif related to input.                                                                                             | gif gintama            |
| gintama       | Gintama Gif.                                                                                                              | gintama                |
| insult        | Insult someone.                                                                                                           | insult @Zero'#2726     |
| invite        | Important Invite Links.                                                                                                   | invite                 |
| jojo          | Jojo gifs.                                                                                                                | jojo                   |
| membercount   | Server membercount.                                                                                                       | membercount            |
| subreddit     | Browse a top 10 post from inputed subreddit.                                                                              | subreddit PewdiepieSubmissions |
| uptime        | BOT Uptime.                                                                                                               | uptime                 |

## Note
- Note that the discord.js-commando framework already has a built-in commands and it is the following:
     - help
     - eval
     - ping
     - prefix
- You can enable/disable the built-in commands by going into `index.js` at `line: 46`.
- Disabling the built-in commands you have to put the following code:
     - `help: false,`
     - `eval: false,`
     - `ping: false,`
     - `prefix: false,`
- If you don't see the codes above that means it is currently enabled.
- Enabling the Unknown Command response you have to delete the `unknownCommand: false,` on `index.js` at `line: 47`.

[![Run on Repl.it](https://repl.it/badge/github/Zeroo000/Project-Zero)](https://repl.it/github/Zeroo000/Project-Zero)