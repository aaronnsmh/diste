exports.run = async (Discord, client, message, args) => {
let complaint = args.slice(0).join(" ");
const author = message.author;
let staffc = message.guild.channels.find("name", "complaints-review")
const embed = new Discord.RichEmbed()
            .setColor("#4286f4")
            .setTimestamp()
            .setTitle("New Complaint")
            .setAuthor(message.author, message.author.avatarURL)
            .setFooter("Complaint made at ", client.avatarURL)
            .setURL("https://ibot.space")
            .setThumbnail(client.avatarURL)
            .setDescription(complaint);

            const embed2 = new Discord.RichEmbed()
                        .setColor("#4286f4")
                        .setTimestamp()
                        .setAuthor(message.author, message.author.avatarURL)
                        .setURL("https://ibot.space")
                        .setDescription("**:white_check_mark: Complaint Sent!** You will be comtacted shortly.");
        await staffc.send({embed});
        message.channel.send(":white_check_mark: **Complaint Sent!** You will be comtacted shortly.");
}
