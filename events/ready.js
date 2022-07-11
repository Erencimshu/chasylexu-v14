module.exports = (client) => {
    console.log(`${client.user.tag} ismi ile giriş yapıldı`);
        client.user.setPresence({activities: [{name:'Chasy 231 #D'}], status:'dnd'})
    
};