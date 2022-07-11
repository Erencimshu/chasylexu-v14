const { Permissions } = require("discord.js");
const { adminid } = require("../config.json");
const ms = require("ms");
module.exports = {
    description: 'timeout',
    type:'CHAT_INPUT',
    options: [
        {
            name:"user",
            description:"Cezalandırılacak Kullanıcıyı Seçin",
            type:"USER",
            required:true
        },
        {
            name:"reason",
            description:"Hangi Sebepten dolayı timeout alıcak?",
            type:"STRING",
            required:true
        },
        {
            name:"time",
            description:"süresini belirtin --> 1 s(saniye) / m(dakika) / h(saat) / d(gün) / w(hafta)",
            type:"STRING",
            required:true
        },
    ],
    run: async (client, interaction) => {
       
         //if(interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return interaction.reply(`Bu komutu kullanamazsın.`);
        if(!interaction.member.permissions.has(adminid)) return interaction.reply(`Bu komutu kullanamazsın.`);
      const user = interaction.options.getMember('user')
      const reason = interaction.options.getString('reason')
      const time = interaction.options.getString('time')
    
      const timeMS = ms(time);
      
      if(!timeMS)
        return interaction.reply("Geçerli bir süre belirtin");
        try{
            user.timeout(timeMS,reason);
        interaction.reply(`${user} isimli kullanıcı, ${reason} sebebiyle ${time} süresince timeout cezası aldı.`);
        }
        catch{
            interaction.reply(`komut sırasında hata oluştu.`);
        }
        
}
};