const express = require('express');
const app = express();

app.listen(() => console.log('start btrolie'));

app.use('/ping', (req, res) => {
	res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require('node-cmd');
const ms = require('ms');
const fs = require('fs');
const ytdl = require('ytdl-core');
const canvas = require('canvas');
const convert = require('hh-mm-ss');
const fetchVideoInfo = require('youtube-info');
const simpleytapi = require('simple-youtube-api');
const util = require('util');
const gif = require('gif-search');
const jimp = require('jimp');
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require('pretty-ms');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود

const prefix = '/';
const developers = '755038783837306901';

////////

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('Pong!');
	}
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'برب') {
		msg.reply('تيت❤');
	}
});

client.on('message', msg => {
	if (msg.content === 'السلام عليكم') {
		msg.reply('وعليكم السلام');
	}
});

client.on('message', msg => {
	if (msg.content === 'هلو') {
		msg.reply('هلوات');
	}
});

client.on('message', roodx=>{
  var rr = ['بايات','لك باي','بايات حبي','براحتك','اخذ راحتك'];
  if(roodx.content === 'باي'){
   var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(`${rr[Math.floor(Math.random() * rr.length)]}`)
   roodx.channel.sendEmbed(embed)
  }
})


client.on('message', roodx=>{
  var rr = ['الحمد لله والشكر','الحمد لله','الحمد لله '];
  if(roodx.content === 'شلونكم'){
   var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(`${rr[Math.floor(Math.random() * rr.length)]}`)
   roodx.channel.sendEmbed(embed)
  }
})


////الرتب التلقائية
client.on("guildMemberAdd", member => {
if(member.guild.id === "755353147320565821") {
member.addRole("771281029876285441")
}
})

////كود يضهر اسم السيرفر مع اسم الاعضاء
client.on('guildMemberAdd', roodx=>
{
    if(roodx)
    {
        roodx.guild.setName(` G7G | ${roodx.guild.memberCount}`)
    }
})


////@here



//say embad

client.on('message', message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

	let command = message.content.split(' ')[0];
	command = command.slice(prefix.length);

	let args = message.content.split(' ').slice(1);

	if (command === 'say') {
		if (!message.channel.guild)
			return message.channel
				.send('هذا الأمر فقط للسيرفرات')
				.then(m => m.delete(5000));
		if (!message.member.hasPermission('RANDOM'))
			return message.channel.send('للأسف لا تمتلك صلاحية RANDOM');
		message.delete();
		message.channel.sendMessage(args.join(' '));
	}

	if (command == 'embed') {
		if (!message.channel.guild)
			return message.channel
				.send('هذا الأمر فقط للسيرفرات')
				.then(m => m.delete(5000));
		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return message.channel.send('للأسف لا تمتلك صلاحية MANAGE_MESSAGES');
		let say = new Discord.RichEmbed()
			.setDescription(args.join('  '))
			.setColor(0x23b2d6);
		message.channel.sendEmbed(say);
		message.delete();
	}
});

///باند
client.on('message', roodx => {
	if (!roodx.member.hasPermission('BAN_MEMBERS')) return;
	var roodx_ottawa = roodx.mentions.members.first();
	var ottawa = roodx.content
		.split(' ')
		.slice('3')
		.join(' ');
	if (roodx.content.startsWith(prefix + 'باند')) {
		if (!roodx_ottawa) return roodx.reply('mentions member');

		if (!ottawa) return roodx.reply('type BAN REASON');
		roodx_ottawa.ban(ottawa).then(r => {
			roodx.channel.send(
				`this ${roodx_ottawa} member is have baneed from server by <@${
					roodx.author.id
				}>`
			);
		});
	}
});

////code say

////كود تكرار الكلام

client.on('message', msg => {
	if (msg.author.bot) return;
	let args = msg.content
		.split(' ')
		.slice(1)
		.join(' ');
	if (msg.content.startsWith(prefix + 'كرر')) {
		msg.delete(100);
		const embed = new Discord.RichEmbed().setColor(`RANDOM`).setDescription(args);
		msg.channel.sendEmbed(embed);
	}
});

////عدم ارسال التوكن

client.on('message', message => {
	if (
		message.content.match(
			/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi
		)
	) {
		if (
			!message.guild.members
				.get(client.user.id)
				.hasPermission('MANAGE_MESSAGES')
		)
			return message.channel.send(
				'**I need Permission `MANAGE_MESSAGE`To delete Tokens**'
			);
		message.delete();
		message.reply(` `);
		return;
	}
	if (message.channel.type === 'dm') {
		if (
			message.content.match(
				/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi
			)
		) {
			message.reply(`لا ترسل هنا التوكن`);
			return;
		}
	}
});

////owner

client.on('message', async ninja => {
	if (ninja.content.startsWith(prefix + 'owner')) {
		if (!ninja.channel.guild) return;
		let i = client.users.size;
		if (ninja.author.id !== '755038783837306901')
			return ninja.channel.send('لست اونر');
		ninja.channel.send('انت اونر ');
	}
});

////كود النشر التلقائي
client.on("guildMemberAdd", ottawa => {
  ottawa.createDM().then(function (channel) {
  return channel.send(`**
     OTTAWA BOT 
       ``-`` اوامر مميزه لانشاء سيرفر كامل احترافي
       ``-``اوامر اداريه مميزه 
        ``-`` سرعه استجابه البوت خياليه 
         ``-``حياك لتجربه البوت

                                 [ https://discord.gg/pW3cVN3 ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", ottawa=> {
  ottawa.createDM().then(function (channel) {
  return channel.send(`**
      OTTAWA BOT 
       ``-`` اوامر مميزه لانشاء سيرفر كامل احترافي
       ``-``اوامر اداريه مميزه 
        ``-`` سرعه استجابه البوت خياليه 
         ``-``حياك لتجربه البوت

                                 [ https://discord.gg/pW3cVN3 ] **`)
}).catch(console.error)
})



////code ban
client.on('message', roodx=>
{
  if(!roodx.member.hasPermission('BAN_MEMBERS'))return;
  var roodx_ottawa = roodx.mentions.members.first();
  var ottawa = roodx.content.split(' ').slice('3').join(' ')
  if(roodx.content.startsWith(prefix + 'ban'))
  {
    if(!roodx_ottawa)return roodx.reply('mentions member');

    if(!ottawa)return roodx.reply('type BAN REASON')
    roodx_ottawa.ban(ottawa).then(r=>
      {
        roodx.channel.send(`this ${roodx_ottawa} member is have baneed from server by <@${roodx.author.id}>`)
        
      })
  }
})

////قفل وفتح الروم

client.on('message', ninja => {
	if (ninja.content === prefix + 'lock') {
		if (!ninja.channel.guild) if (!ninja.channel.guild) return;

		if (!ninja.member.hasPermission('MANAGE_MESSAGES'))
			return ninja.reply('**ليس لديك صلاحيات**');
		ninja.channel
			.overwritePermissions(ninja.guild.id, {
				SEND_MESSAGES: false
			})
			.then(() => {
				ninja.reply('**تم قفل الشات :no_entry: **');
			});
	}
	if (ninja.content === prefix + 'unlock') {
		if (!ninja.channel.guild) if (!ninja.channel.guild) return;

		if (!ninja.member.hasPermission('MANAGE_MESSAGES'))
			return ninja.reply('**ليس لديك صلاحيات**');
		ninja.channel
			.overwritePermissions(ninja.guild.id, {
				SEND_MESSAGES: true
			})
			.then(() => {
				ninja.reply('**تم فتح الشات :white_check_mark:**');
			});
	}
});

//منشن الدخول

client.on('guildMemberAdd', member => {
	var channel = member.guild.channels.cache.find(
		ch => ch.name === 'ترحيب↬・welcome・↬✦'
	);
	if (!channel) return;
	var embed = new Discord.MessageEmbed()
		.setColor('RED')
		.setTitle('**Member Add , Account Information**')
		.addField('Welcome to the server', `${member}`)
		.addField('Year', member.guild.createdAt.getFullYear())
		.addField('Month', member.guild.createdAt.getMonth())
		.addField('Hours', member.guild.createdAt.getHours())
		.addField('Minutes', member.guild.createdAt.getMinutes())
		.addField('Second', member.guild.createdAt.getSeconds());
	channel.send(embed);
});

/////كود كريدت

const cool = [];

client.on('message', async message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	const args = message.content.split(' ');
	const credits = require('./credits.json');
	const path = './credits.json';
	const mention =
		message.mentions.users.first() ||
		client.users.get(args[1]) ||
		message.author;
	const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	const author = message.author.id;
	const balance = args[2];
	const daily = Math.floor(Math.random() * 350) + 10;

	if (!credits[author]) credits[author] = { credits: 50 };
	if (!credits[mention.id]) credits[mention.id] = { credits: 50 };
	fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {
		if (err) console.log(err);
	});

	if (message.content.startsWith(prefix + 'كردت')) {
		if (args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

		if (args[2]) {
			if (isNaN(args[2]))
				return message.channel.send(
					'**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**'
				);
			if (mention.bot)
				return message.channel.send(
					`**:heavy_multiplication_x:| ${
						message.content.split(' ')[1]
					} لم يتم العثور على**`
				);
			if (mention.id === message.author.id)
				return message.channel.send(
					'**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**'
				);
			if (credits[author].credits < balance)
				return message.channel.send(
					'**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**'
				);
			var one = Math.floor(Math.random() * 9) + 1;
			var two = Math.floor(Math.random() * 9) + 1;
			var three = Math.floor(Math.random() * 9) + 1;
			var four = Math.floor(Math.random() * 9) + 1;

			var number = `${one}${two}${three}${four}`;

			message.channel
				.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`)
				.then(m => {
					message.channel
						.awaitMessages(m => m.author.id === message.author.id, {
							max: 1,
							time: 10000
						})
						.then(c => {
							if (c.first().content === number) {
								m.delete();
								message.channel.send(
									`**:atm:| ${
										message.author.username
									}, قام بتحويل \`${balance}\` لـ ${mention}**`
								);
								credits[author].credits += -balance;
								credits[mention.id].credits += +balance;
								fs.writeFile(path, JSON.stringify(credits, null, 5), function(
									err
								) {
									if (err) console.log(err);
								});
							} else if (c.first().content !== number) {
								m.delete();
								message.channel.send(
									`** :money_with_wings: | تم الغاء الإرسال**`
								);
							}
						});
				});
		}
		if (!args[2]) {
			if (mention.bot)
				return message.channel.send(
					`**:heavy_multiplication_x:| ${
						message.content.split(' ')[1]
					} لم يتم العثور على**`
				);
			message.channel.send(
				`**${mention.username}, your :credit_card: balance is **${
					credits[mention.id].credits
				}`
			);
		}
	}
	if (message.content.startsWith(prefix + 'راتب')) {
		if (cool.includes(message.author.id))
			return message.channel.send(
				`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`
			);
		if (mentionn) {
			var one = Math.floor(Math.random() * 9) + 1;
			var two = Math.floor(Math.random() * 9) + 1;
			var three = Math.floor(Math.random() * 9) + 1;
			var four = Math.floor(Math.random() * 9) + 1;

			var number = `${one}${two}${three}${four}`;

			message.channel
				.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`)
				.then(async m => {
					message.channel
						.awaitMessages(msg => msg.author.id === message.author.id, {
							max: 1,
							time: 20000,
							errors: ['time']
						})
						.then(collected => {
							if (collected.first().content === number) {
								m.delete();
								collected.first().delete();
								credits[mentionn.id].credits += +daily;
								fs.writeFile(path, JSON.stringify(credits, null, 5), function(
									err
								) {
									if (err) console.log(err);
								});

								message.channel.send(
									`**:atm: | \`${daily}\`, تم تسليم المبلغ**`
								);
							}
							if (collected.first().content !== number) {
								return m.delete();
							}
						});
				});
		} else if (!mentionn) {
			credits[author].credits += +daily;
			fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {
				if (err) console.log(err);
			});

			message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
		}
		cool.unshift(message.author.id);

		setTimeout(() => {
			cool.shift(message.author.id);
			message.author
				.send('**:atm: | `Daily`, يمكنك الحصول على الكردت المجانية الان**')
				.catch();
		}, ms('1d'));
	}
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'bc')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return;
		let args = message.content.split(' ').slice(1);
		var argresult = args.join(' ');
		message.guild.members
			.filter(m => m.presence.status !== 'offline')
			.forEach(m => {
				m.send(`${argresult}\n ${m}`);
			});
		message.channel.send(
			`\`${
				message.guild.members.filter(m => m.presence.status !== 'online').size
			}\` : عدد الاعضاء المستلمين`
		);
		message.delete();
	}
});

////ميوت

client.on('message', message => {
	if (message.author.bot) return;

	let command = message.content.split(' ')[0];

	if (command === prefix + 'ميوت') {
		if (message.author.bot) return;
		if (!message.member.hasPermission('MANAGE_ROLES'))
			return message
				.reply("** لا يوجد لديك برمشن 'Manage Roles' **")
				.catch(console.error);
		let user = message.mentions.users.first();
		let modlog = client.channels.find(gg => gg.name === 'log');
		let muteRole = client.guilds
			.get(message.guild.id)
			.roles.find(gg => gg.name === 'فك الميوت');
		if (!muteRole)
			return message
				.reply("** لا يوجد رتبة الميوت 'Muted' **")
				.catch(console.error);
		if (message.mentions.users.size < 1)
			return message
				.reply('** يجب عليك منشنت شخص اولاً**')
				.catch(console.error);

		const embed = new Discord.RichEmbed()
			.setColor(0x00ae86)
			.setTimestamp()
			.addField('الأستعمال:', 'اسكت/احكي')
			.addField(
				'تم ميوت:',
				`${user.username}#${user.discriminator} (${user.id})`
			)
			.addField(
				'بواسطة:',
				`${message.author.username}#${message.author.discriminator}`
			);

		if (
			!message.guild
				.member(client.user)
				.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')
		)
			return message
				.reply('** لا يوجد لدي برمشن Manage Roles **')
				.catch(console.error);

		if (message.guild.member(user).roles.has(muteRole.id)) {
			return message
				.reply('**:white_check_mark: .. تم اعطاء العضو ميوت**')
				.catch(console.error);
		} else {
			message.guild
				.member(user)
				.addRole(muteRole)
				.then(() => {
					return message
						.reply('**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**')
						.catch(console.error);
				});
		}
	}
});

////غلق وفتح الروم

client.on('message', message => {
	if (message.content === prefix + 'غلق الروم') {
		if (!message.channel.guild)
			return message.reply(' هذا الامر فقط للسيرفرات !!');

		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return message.reply(' ليس لديك صلاحيات');
		message.channel
			.overwritePermissions(message.guild.id, {
				SEND_MESSAGES: false
			})
			.then(() => {
				message.reply('**تم قفل الشات :no_entry: **');
			});
	}
	if (message.content === prefix + 'فتح الروم') {
		if (!message.channel.guild)
			return message.reply(' هذا الامر فقط للسيرفرات !!');

		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return message.reply('ليس لديك صلاحيات');
		message.channel
			.overwritePermissions(message.guild.id, {
				SEND_MESSAGES: true
			})
			.then(() => {
				message.reply('**تم فتح الشات :white_check_mark:**');
			});
	}
});

client.on('error', err => {
	console.log(err);
});

client.on('messageCreate', async message => {
	let args = message.cleanContent.split(' ');
	if (args[0] == `${prefix}roles`) {
		let space = '                         ';
		let roles = message.guild.roles
			.map(r => r)
			.sort((a, b) => b.position - a.position);
		let rr = roles
			.map(
				r =>
					`${r.name +
						space.substring(r.name.length) +
						message.guild.members.filter(m => m.roles.includes(r.id))
							.length} members`
			)
			.join('\n');
		await message.channel.sebd(`\`\`\`${rr}\`\`\``);
	}
});

//// كود سحب شخص
client.on('message', message => {
	if (!message.channel.guild) return;
	if (message.content.startsWith(prefix + 'سحب')) {
		if (message.member.hasPermission('MOVE_MEMBERS')) {
			if (message.mentions.users.size === 0) {
				return message.channel.send('``Use : ' + prefix + 'move @User``');
			}
			if (message.member.voiceChannel != null) {
				if (message.mentions.members.first().voiceChannel != null) {
					var authorchannel = message.member.voiceChannelID;
					var usermentioned = message.mentions.members.first().id;
					var embed = new Discord.RichEmbed()
						.setTitle('Succes!')
						.setColor('#000000')
						.setDescription(
							`✅ You Have Moved <@${usermentioned}> To Your Channel `
						);
					var embed = new Discord.RichEmbed()
						.setTitle(`You are Moved in ${message.guild.name} `)
						.setColor('RANDOM')
						.setTitle(`✽ **Premium**`)

						.setDescription(
							`**<@${
								message.author.id
							}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
						);
					message.guild.members
						.get(usermentioned)
						.setVoiceChannel(authorchannel)
						.then(m => message.channel.send(embed));
					message.guild.members.get(usermentioned).send(embed);
				} else {
					message.channel.send(
						'`You Cant Move' +
							message.mentions.members.first() +
							' `The User Should Be In channel To Move It`'
					);
				}
			} else {
				message.channel.send(
					'**``You Should Be In Room Voice To Move SomeOne``**'
				);
			}
		} else {
			message.react('❌');
		}
	}
});

client.on('message', function(message) {
	if (!message.channel.guild) return;
	if (message.author.bot) return;
	if (message.author.id === client.user.id) return;
	if (message.author.equals(client.user)) return;
	if (!message.content.startsWith(prefix)) return;

	var args = message.content.substring(prefix.length).split(' ');
	switch (args[0].toLocaleLowerCase()) {
		case 'clear':
			message.delete();
			if (!message.channel.guild) return;
			if (message.member.hasPermission(0x2000)) {
				if (!args[1]) {
					message.channel.fetchMessages().then(messages => {
						message.channel.bulkDelete(messages);
						var messagesDeleted = messages.array().length;
						message.channel
							.send(
								' ' +
									'**```fix\n' +
									messagesDeleted +
									' ' +
									': عدد الرسائل التي تم مسحها' +
									'```**'
							)
							.then(m => m.delete(5000));
					});
				} else {
					let messagecount = parseInt(args[1]);
					message.channel
						.fetchMessages({ limit: messagecount })
						.then(messages => message.channel.bulkDelete(messages));
					message.channel
						.send(
							' ' +
								'**```fix\n' +
								args[1] +
								' ' +
								': عدد الرسائل التي تم مسحها' +
								'```**'
						)
						.then(m => m.delete(5000));
					message.delete(60000);
				}
			} else {
				var manage = new Discord.RichEmbed()
					.setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
					.setColor('RANDOM');
				message.channel.sendEmbed(manage);
				return;
			}
	}
});

///avatar savatar
client.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	if (message.content.startsWith(prefix + 'صورة')) {
		const mention = message.mentions.users.first();

		if (!mention) return console.log('');
		let embed = new Discord.RichEmbed()
			.setColor('BLACK')
			.setAuthor(
				`${mention.username}#${mention.discriminator}`,
				`${mention.avatarURL}`
			)
			.setTitle('Avatar Link')
			.setURL(`${mention.avatarURL}`)
			.setImage(`${mention.avatarURL}`)
			.setFooter(
				`Requested By ${message.author.tag}`,
				`${message.author.avatarURL}`
			);
		message.channel.send(embed);
	}
});

////كود قيف اوي
client.on('message', async message => {
	var room;
	var title; //HactorMC
	var duration; //HactorMC
	var gMembers;
	var filter = m => m.author.id === message.author.id;
	if (message.content.startsWith(prefix + 'قيف اوي')) {
		//return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
		if (!message.guild.member(message.author).hasPermission('MANAGE_GUILD'))
			return message.channel.send(
				':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**'
			);
		message.channel
			.send(`**من فضلك اكتب اسم الروم بدون منشن ( # )**`)
			.then(msgg => {
				message.channel
					.awaitMessages(filter, {
						max: 1, //HactorMC
						time: 20000,
						errors: ['time']
					})
					.then(collected => {
						let room = message.guild.channels.find(
							gg => gg.name === collected.first().content
						);
						if (!room)
							return message.channel.send(
								'**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**'
							);
						room = collected.first().content;
						collected.first().delete();
						msgg.edit('**اكتب مدة القيف اواي بالدقائق**').then(msg => {
							message.channel
								.awaitMessages(filter, {
									max: 1, //HactorMC
									time: 20000,
									errors: ['time']
								})
								.then(collected => {
									if (isNaN(collected.first().content))
										return message.channel.send(
											':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**'
										);
									duration = collected.first().content * 60000;
									collected.first().delete();
									msgg
										.edit(
											':eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**'
										)
										.then(msg => {
											message.channel
												.awaitMessages(filter, {
													max: 1,
													time: 20000,
													errors: ['time']
												})
												.then(collected => {
													title = collected.first().content;
													collected.first().delete();
													try {
														let giveEmbed = new Discord.RichEmbed()
															.setAuthor(
																message.guild.name,
																message.guild.iconURL
															)
															.setTitle(title)
															.setDescription(
																`المدة : ${duration / 60000} دقائق`
															)
															.setFooter(
																message.author.username,
																message.author.avatarURL
															);
														message.guild.channels
															.find(gg => gg.name === room)
															.send(giveEmbed)
															.then(m => {
																let re = m.react('🎉');
																setTimeout(() => {
																	let users = m.reactions.get('🎉').users;
																	let list = users
																		.array()
																		.filter(u => u.id !== m.author.id);
																	let gFilter =
																		list[
																			Math.floor(Math.random() * list.length) +
																				0
																		];
																	if (users.size === 1)
																		gFilter = '**لم يتم التحديد**';
																	let endEmbed = new Discord.RichEmbed()
																		.setAuthor(
																			message.author.username,
																			message.author.avatarURL
																		)
																		.setTitle(title)
																		.addField(
																			'انتهى القيف اواي !',
																			`الفائز هو : ${gFilter}`
																		)
																		.setFooter(
																			message.guild.name,
																			message.guild.iconURL
																		);
																	m.edit(endEmbed);
																}, duration);
															});
														msgg.edit(
															`:heavy_check_mark:| **تم اعداد القيف اواي**`
														);
													} catch (e) {
														msgg.edit(
															`:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`
														);
														console.log(e);
													}
												});
										});
								});
						});
					});
			});
	}
});

/////كود سرعة البوت او البينق
client.on('message', message => {
	if (!message.channel.guild) return;
	if (message.content.startsWith(prefix + 'ping')) {
		if (message.author.bot) return;
		if (!message.channel.guild) return;
		var Bping = `${Math.round(client.ping)}`;

		const E1ping = new Discord.RichEmbed()
			.setTitle('ــــــــــــــــــــــــــــــ')
			.addField(
				`**BOT Ping Is** :__${Bping}📶__`,
				'ــــــــــــــــــــــــــــــ'
			)
			.setFooter(`Requested by | ${message.author.tag}`)
			.setColor('BLUE');
		message.channel.send(E1ping);
	}
});

////تعديل غير اساسي

client.on('message', message => {
	if (message.content.startsWith(prefix + 'تقديم')) {
		if (!message.channel.guild) return;
		if (message.author.bot) return;
		let channel = message.guild.channels.find(gg => gg.name === 'التقديمات');
		if (!channel)
			return message.reply(
				'**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**'
			);
		if (channel) {
			message.channel.send(message.member + ', **:timer:**').then(m => {
				m.edit(message.member + ', **اسمك الحقيقى  ✍**');
				m.channel
					.awaitMessages(m1 => m1.author == message.author, {
						maxMatches: 1,
						time: 60 * 1000
					})
					.then(m1 => {
						m1 = m1.first();
						var name = m1.content;
						m1.delete();
						m.edit(message.member + ', **:timer:**').then(m => {
							m.edit(message.member + ', **كم عمرك 🎓**');
							setTimeout(() => {
								m.delete();
							}, 10000);
							m.channel
								.awaitMessages(m2 => m2.author == message.author, {
									maxMatches: 1,
									time: 60 * 1000
								})
								.then(m2 => {
									m2 = m2.first();
									var age = m2.content;
									m2.delete();
									message.channel
										.send(message.member + ', **:timer:**')
										.then(m => {
											m.edit(message.member + ', **هل تتفاعل في الرتبه🎙**');
											setTimeout(() => {
												m.delete();
											}, 10000);
											m.channel
												.awaitMessages(m1 => m1.author == message.author, {
													maxMatches: 1,
													time: 60 * 1000
												})
												.then(m3 => {
													m3 = m3.first();
													var ask = m3.content;
													m3.delete();
													message.channel
														.send(message.member + ', **:timer:**')
														.then(m => {
															m.edit(
																message.member + ', **هل ستحترم القوانين ؟ 📑**'
															);
															setTimeout(() => {
																m.delete();
															}, 10000);
															m.channel
																.awaitMessages(
																	m1 => m1.author == message.author,
																	{ maxMatches: 1, time: 60 * 1000 }
																)
																.then(m4 => {
																	m4 = m4.first();
																	var ask2 = m4.content;
																	m4.delete();
																	message.channel
																		.send(message.member + ', **:timer:**')
																		.then(m => {
																			m.edit(
																				message.member +
																					', **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه التي تريدها 🤔**'
																			);
																			m.channel
																				.awaitMessages(
																					m1 => m1.author == message.author,
																					{ maxMatches: 1, time: 60 * 1000 }
																				)
																				.then(m5 => {
																					m5 = m5.first();
																					var ask3 = m5.content;
																					m5.delete();
																					m.edit(
																						message.member +
																							', **....جارى جمع البيانات**'
																					).then(mtime => {
																						setTimeout(() => {
																							let embed = new Discord.RichEmbed()
																								.setColor('RANDOM')
																								.setTitle(
																									`**تقديم على رتبه** [__**${
																										message.guild.name
																									}**__]`
																								)
																								.addField(
																									'**`الاسم`**',
																									`${name}`,
																									true
																								)
																								.addField(
																									'**`العمر`**',
																									`${age}`,
																									true
																								)
																								.addField(
																									'**`هل سوف يتفاعل ؟`**',
																									`${ask}`
																								)
																								.addField(
																									'**`هل سوف يحترم القوانين ؟`**',
																									`${ask2}`
																								)
																								.addField(
																									'**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها`**',
																									`${ask3}`
																								)
																								.setFooter(
																									`Name : ${
																										message.author.username
																									}\nID User : ${
																										message.author.id
																									}`,
																									'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif'
																								);
																							channel.send(embed);
																						}, 2500);
																						setTimeout(() => {
																							mtime.delete();
																						}, 3000);
																					});
																				});
																		});
																});
														});
												});
										});
								});
						});
					});
			});
		}
	}
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'room1')) {
		if (!message.channel.guild) return;
		if (message.author.bot) return;
		if (!message.member.hasPermission('`MANAGE_CHANNELS'))
			return message.reply('**تحتاج الى `MANAGE_CHANNELS`**');
		message.guild.createChannel('التقديمات', 'text').then(c => {
			c.overwritePermissions(message.guild.id, {
				SEND_MESSAGES: false
			});
		});
		message.channel.send('**✅ تم انشاء روم التقديمات بنجاح**');
	}
});

client.on('message', message => {
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if (!message.guild) return;
	if (!msg.startsWith(prefix + 'role')) return;
	if (!message.member.hasPermission('MANAGE_ROLES'))
		return message.channel.send(' **ليس لديك صلاحيات :rolling_eyes:**');
	if (msg.toLowerCase().startsWith(prefix + 'حذف الرتبة')) {
		if (!args[0])
			return message.reply('**:x: يرجى وضع الشخص المراد سحب منه الرتبة**');
		if (!args[1])
			return message.reply('**:x: يرجى وضع الرتبة المراد سحبها من الشخص**');
		var role = msg
			.split(' ')
			.slice(2)
			.join(' ')
			.toLowerCase();
		var role1 = message.guild.roles
			.filter(r => r.name.toLowerCase().indexOf(role) > -1)
			.first();
		if (!role1)
			return message.reply('**:x: يرجى وضع الرتبة المراد سحبها من الشخص**');
		if (message.mentions.members.first()) {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					' اانت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.mentions.members.first().removeRole(role1);
			return message.reply(
				'**:white_check_mark: [ ' +
					role1.name +
					' ] رتبة [ ' +
					args[0] +
					' ] تم سحب من **'
			);
		}
		if (args[0].toLowerCase() == 'all') {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.guild.members.forEach(m => m.removeRole(role1));
			return message.reply(
				'**:white_check_mark: [ ' + role1.name + ' ] تم سحب من الكل رتبة**'
			);
		} else if (args[0].toLowerCase() == 'bots') {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.guild.members
				.filter(m => m.user.bot)
				.forEach(m => m.removeRole(role1));
			return message.reply(
				'**:white_check_mark: [ ' + role1.name + ' ] تم سحب من البوتات رتبة**'
			);
		} else if (args[0].toLowerCase() == 'humans') {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.guild.members
				.filter(m => !m.user.bot)
				.forEach(m => m.removeRole(role1));
			return message.reply(
				'**:white_check_mark: [ ' + role1.name + ' ] تم سحب من البشريين رتبة**'
			);
		}
	} else {
		if (!args[0])
			return message.reply('**:x: يرجى وضع الشخص المراد اعطائها الرتبة**');
		if (!args[1])
			return message.reply('**:x: يرجى وضع الرتبة المراد اعطائها للشخص**');
		var role = msg
			.split(' ')
			.slice(2)
			.join(' ')
			.toLowerCase();
		var role1 = message.guild.roles
			.filter(r => r.name.toLowerCase().indexOf(role) > -1)
			.first();
		if (!role1)
			return message.reply('**:x: يرجى وضع الرتبة المراد اعطائها للشخص**');
		if (message.mentions.members.first()) {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.mentions.members.first().addRole(role1);
			return message.reply(
				'**:white_check_mark: [ ' +
					role1.name +
					' ] رتبة [ ' +
					args[0] +
					' ] تم اعطاء **'
			);
		}
		if (args[0].toLowerCase() == 'all') {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);
			message.guild.members.forEach(m => m.addRole(role1));
			return message.reply(
				'**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء الكل رتبة**'
			);
		} else if (args[0].toLowerCase() == 'bots') {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.guild.members
				.filter(m => m.user.bot)
				.forEach(m => m.addRole(role1));
			return message.reply(
				'**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء البوتات رتبة**'
			);
		} else if (args[0].toLowerCase() == 'humans') {
			if (role1.position >= message.member.highestRole.position)
				return message.channel.send(
					'انت لا تمتلك الصلاحيات الكافية :rolling_eyes:'
				);

			message.guild.members
				.filter(m => !m.user.bot)
				.forEach(m => m.addRole(role1));
			return message.reply(
				'**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء البشريين رتبة**'
			);
		}
	}
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'تقديم')) {
		if (!message.channel.guild) return;
		if (message.author.bot) return;
		let channel = message.guild.channels.find(gg => gg.name === 'التقديمات');
		if (!channel)
			return message.reply(
				'**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**'
			);
		if (channel) {
			message.channel.send(message.member + ', **:timer:**').then(m => {
				m.edit(message.member + ', **اسمك الحقيقى  ✍**');
				m.channel
					.awaitMessages(m1 => m1.author == message.author, {
						maxMatches: 1,
						time: 60 * 1000
					})
					.then(m1 => {
						m1 = m1.first();
						var name = m1.content;
						m1.delete();
						m.edit(message.member + ', **:timer:**').then(m => {
							m.edit(message.member + ', **كم عمرك 🎓**');
							setTimeout(() => {
								m.delete();
							}, 10000);
							m.channel
								.awaitMessages(m2 => m2.author == message.author, {
									maxMatches: 1,
									time: 60 * 1000
								})
								.then(m2 => {
									m2 = m2.first();
									var age = m2.content;
									m2.delete();
									message.channel
										.send(message.member + ', **:timer:**')
										.then(m => {
											m.edit(message.member + ', **هل تتفاعل في الرتبه🎙**');
											setTimeout(() => {
												m.delete();
											}, 10000);
											m.channel
												.awaitMessages(m1 => m1.author == message.author, {
													maxMatches: 1,
													time: 60 * 1000
												})
												.then(m3 => {
													m3 = m3.first();
													var ask = m3.content;
													m3.delete();
													message.channel
														.send(message.member + ', **:timer:**')
														.then(m => {
															m.edit(
																message.member + ', **هل ستحترم القوانين ؟ 📑**'
															);
															setTimeout(() => {
																m.delete();
															}, 10000);
															m.channel
																.awaitMessages(
																	m1 => m1.author == message.author,
																	{ maxMatches: 1, time: 60 * 1000 }
																)
																.then(m4 => {
																	m4 = m4.first();
																	var ask2 = m4.content;
																	m4.delete();
																	message.channel
																		.send(message.member + ', **:timer:**')
																		.then(m => {
																			m.edit(
																				message.member +
																					', **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه التي تريدها 🤔**'
																			);
																			m.channel
																				.awaitMessages(
																					m1 => m1.author == message.author,
																					{ maxMatches: 1, time: 60 * 1000 }
																				)
																				.then(m5 => {
																					m5 = m5.first();
																					var ask3 = m5.content;
																					m5.delete();
																					m.edit(
																						message.member +
																							', **....جارى جمع البيانات**'
																					).then(mtime => {
																						setTimeout(() => {
																							let embed = new Discord.RichEmbed()
																								.setColor('RANDOM')
																								.setTitle(
																									`**تقديم على رتبه** [__**${
																										message.guild.name
																									}**__]`
																								)
																								.addField(
																									'**`الاسم`**',
																									`${name}`,
																									true
																								)
																								.addField(
																									'**`العمر`**',
																									`${age}`,
																									true
																								)
																								.addField(
																									'**`هل سوف يتفاعل ؟`**',
																									`${ask}`
																								)
																								.addField(
																									'**`هل سوف يحترم القوانين ؟`**',
																									`${ask2}`
																								)
																								.addField(
																									'**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها`**',
																									`${ask3}`
																								)
																								.setFooter(
																									`Name : ${
																										message.author.username
																									}\nID User : ${
																										message.author.id
																									}`,
																									'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif'
																								);
																							channel.send(embed);
																						}, 2500);
																						setTimeout(() => {
																							mtime.delete();
																						}, 3000);
																					});
																				});
																		});
																});
														});
												});
										});
								});
						});
					});
			});
		}
	}
});

client.on('message', async message => {
	if (message.content.startsWith(prefix + 'رفض')) {
		if (!message.channel.guild) return;

		let mention = message.mentions.members.first();
		let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
		let rrrr = message.content.split(/ +/).slice(2);
		let reason = rrrr.join(' ');
		if (!acRoom)
			return message.reply(
				`${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
			);
		if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES'))
			return;
		if (!mention) return message.reply('منشن شخص');
		message.react('✅');
		acRoom
			.send(
				`**${mention} تم رفضك للأسف **
السبب : \`${reason}\``
			)
			.then(m => m.react('✅'));
	}
});
client.on('message', message => {
	if (message.content.startsWith(prefix + 'room2')) {
		if (!message.channel.guild) return;
		if (message.author.bot) return;
		if (!message.member.hasPermission('MANAGE_CHANNELS'))
			return message.reply('**تحتاج الى `MANAGE_CHANNELS`**');
		message.guild.createChannel('القبول-الرفض', 'text').then(c => {
			c.overwritePermissions(message.guild.id, {
				SEND_MESSAGES: false
			});
		});
		message.channel.send('**✅ تم انشاء روم القبول والرفض بنجاح**');
	}
});
client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length);

	if (command === `avatar`) {
		if (msg.channel.type === 'dm')
			return msg.channel.send(
				"Nope Nope!! u can't use avatar command in DMs (:"
			);
		let mentions = msg.mentions.members.first();
		if (!mentions) {
			let sicon = msg.author.avatarURL;
			let embed = new Discord.RichEmbed()
				.setImage(msg.author.avatarURL)
				.setColor('#5074b3');
			msg.channel.send({ embed });
		} else {
			let sicon = mentions.user.avatarURL;
			let embed = new Discord.RichEmbed().setColor('#5074b3').setImage(sicon);
			msg.channel.send({ embed });
		}
	}
});

////كود تيكت
client.on('message', message => {
	if (message.content.startsWith(prefix + 'تكت')) {
		const reason = message.content
			.split(' ')
			.slice(1)
			.join(' ');
		if (!message.guild.roles.exists(gg => gg.name === 'Support Team'))
			return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\`.`);
		if (
			message.guild.channels.filter(
				Channel =>
					Channel.name == `ticket-${message.author.id}` &&
					Channel.type == 'text'
			).size > 0
		)
			return message.channel.send(`You already have a ticket open.`);
		message.guild
			.createChannel(`ticket-${message.author.id}`, 'text')
			.then(c => {
				let role = message.guild.roles.find(gg => gg.name === 'Support Team');
				let role2 = message.guild.roles.find(gg => gg.name === '@everyone');
				c.overwritePermissions(role, {
					SEND_MESSAGES: true,
					READ_MESSAGES: true
				});
				c.overwritePermissions(message.author, {
					SEND_MESSAGES: true,
					READ_MESSAGES: true
				});
				c.overwritePermissions(message.guild.id, {
					READ_MESSAGES: false
				});
				message.channel.send(
					`:white_check_mark: Your ticket has been created, ${c}.`
				);
				const embed = new Discord.RichEmbed()
					.setColor(0xcf40fa)
					.addField(
						`Hey ${message.author.username}!`,
						`Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`
					)
					.setTimestamp();
				c.send({
					embed: embed
				});
			})
			.catch(console.error);
	} else if (message.content.startsWith(prefix + 'غلق التكت')) {
		if (!message.guild.roles.exists(gg => gg.name === 'Support Team'))
			return message.channel.send(` لازم تسوي رتبة اسمها \`Support Team\`.`);
		if (!message.channel.name.startsWith('ticket-'))
			return message.channel.send("This isn't a ticket channel!");
		if (
			!message.member.roles.has(
				message.guild.roles.filter(r => r.name === 'Support Team').first().id
			)
		)
			return message.channel.send("You don't have the `Support Team` role!");
		message.channel
			.delete()
			.catch(e => message.channel.send('Check my permissions!'));
	}
});

client.on('message', async message => {
	if (!message.guild || message.author.bot) return;
	let args = message.content.split(' ');
	if (args[0] == `${prefix}cr`) {
		if (
			!message.guild.me.hasPermission('MANAGE_ROLES') ||
			!message.member.hasPermission('MANAGE_ROLES')
		)
			return;
		if (!args[1] || !args[2])
			return message.reply(
				`Usage: ${args[0]} [role color] [role name]\nExample: ${
					args[0]
				} blue Admin`
			);
		try {
			let role = await message.guild.createRole({
				name: args.slice(2).join(' ') || 'new role',
				color: args[1].toUpperCase() || null
			});
			await message.reply(`Done, Created **${role.name}** role!`);
		} catch (e) {
			message.reply(`Error! ${e.message || e}`);
		}
	}
});

//// كود معلومات الشخص او اليوزر
client.on('message', pixelbot => {
	// itzZa1D - Codes Team.
	if (pixelbot.content.startsWith(prefix + 'U')) {
		// itzZa1D - Codes Team.
		if (pixelbot.author.bot) return;
		if (!pixelbot.guild)
			return pixelbot.reply('**:x: - This Command is only done on Servers**');
		pixelbot.guild.fetchInvites().then(invites => {
			// itzZa1D - Codes Team.
			let personalInvites = invites.filter(
				i => i.inviter.id === pixelbot.author.id
			);
			let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
			var roles = pixelbot.member.roles
				.map(roles => `**__${roles.name}__ |**`)
				.join(` `);
			let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
				.setColor('#00000')
				.setTitle(' :beginner: :heartpulse:   | Use  r Info') // itzZa1D - Codes Team.
				.setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
				.addField('**✽ Name :**   ', pixelbot.author.username, true)
				.addField('**✽ Tag :**   ', pixelbot.author.discriminator, true)
				.addField('**✽ ID :** ', pixelbot.author.id, true) // itzZa1D - Codes Team.
				.addField(
					'**✽ Joined At :**   ',
					moment(pixelbot.joinedAt).format('D/M/YYYY h:mm a '),
					true
				)
				.addField(
					'**✽ Created At :**    ',
					moment(pixelbot.author.createdAt).format('D/M/YYYY h:mm a '),
					true
				)
				.addField('**✽ Total invites :**    ', inviteCount, true)
				.setTimestamp(); // itzZa1D - Codes Team.

			pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
		});
	}
}); // itzZa1D - Codes Team.

////كود معلومات البوت
client.on('message', message => {
	if (message.content === prefix + 'B') {
		const bot = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor('#00000')
			.addField(
				'✽ **Bot Ping** : ',
				`» ${Date.now() - client.createdTimestamp}` + ' ms',
				true
			)
			.addField('**Servers** :  ', `» ${client.guilds.size}`, true)
			.addField('**Channels** : ', `» ${client.channels.size} `, true)
			.addField('**Users** : ', `» ${client.users.size} `, true)
			.addField('**Bot Name** :  ', `» ${client.user.tag} `, true)
			.addField('**Bot Owner** :  ', `» <@359541019836022784>`, true) // تعديل اساسي غير الايدي لايدي حسابك
			.setImage('')
			.setFooter(message.author.username, message.client.avatarURL);
		message.channel.send(bot);
	}
});

////كود معلومات السيرفر
client.on('message', message => {
	if (message.content.startsWith(prefix + 'S')) {
		if (!message.channel.guild)
			return message.channel.send(` | This Command is used only in servers!`);
		const millis = new Date().getTime() - message.guild.createdAt.getTime();
		const now = new Date();
		const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
		const days = millis / 1000 / 60 / 60 / 24;
		var embed = new Discord.RichEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL)
			.addField(':id:✽** Server ID:**', `» ${message.guild.id} `, true)
			.addField(
				':calendar:✽** Created On**',
				`» ${message.guild.createdAt.toLocaleString()}`,
				true
			)
			.addField(':crown: ✽**Server Owner**', `**${message.guild.owner}**`, true)
			.addField(
				`✽** Members ** [${message.guild.members.size}]`,
				`**${
					message.guild.members.filter(c => c.presence.status !== 'offline')
						.size
				}** **Online**`,
				true
			)
			.addField(
				':speech_balloon:✽** Channels **',
				`» **${message.guild.channels.filter(m => m.type === 'text').size}**` +
					' TexT | VoicE  ' +
					`**${message.guild.channels.filter(m => m.type === 'voice').size}** `,
				true
			)
			.addField(':earth_africa:✽** Region **', ` ${message.guild.region}`, true)
			.setImage('')

			.setColor('#000000');
		message.channel.sendEmbed(embed);
	}
});

///// كود خروج الاعضاء

client.on('message', message => {
	if (message.content.startsWith(prefix + 'setby')) {
		let args = message.mentions.channels.first();
		if (!args)
			message.channel.send('** منشن روم . ❌**').then(m => {
				m.delete(1500);
			});
		if (
			!message.guild.member(message.author.id).hasPermission('MANAGE_CHANNELS')
		)
			return message.channel.send('**ليس لديك صلاحيات . ❌**');
		message.channel.send(
			`**${args}.  | :ballot_box_with_check: |لقد تم شغيل المغادرة هنا**`
		);
		client.on('guildMemberAdd', member => {
			if (member.user.bot) return;
			var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`**الله معاك ✋ **`)
				.addField('**__شكرا لوقت ولبقائك معنا لوقت كافي__**  ', `${member}`)
				.setDescription(`**مع السلامه تشرفنا بك ✋** `)
				.addField('👤   تبقي', `**[ ${member.guild.memberCount} ]**`, true)
				.setColor('RANDOM')
				.setFooter(`نتمنى لكم الاستمتاع`);

			var channel = member.guild.channels.find(
				gg => gg.name === '✦↬・leaving・↬مغادرة'
			); //// تعديل اساسي
			if (!channel) return;
			channel.send({ embed: embed });
		});
	}
});

client.login('NzY5MTU0NDQwMjk1ODc0NTkw.X5K45A.SO3A-S_Mb423R1GZqGgd862rAw8');
