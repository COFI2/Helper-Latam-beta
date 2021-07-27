const Discord = require("discord.js")
const client = new Discord.Client();
//test 
function presence(){
  client.user.setPresence({
     status: "dnd",  
     activity: {
        name: `${client.guilds.cache.size} Servers|Making tags |?tag (Pokemon) (nature/stats/moveset) no "-" for spaces |?help |Version 0.4| `,
        type: "COMPETING"
     }
  });
}
client.on("ready", () => {
    console.log("Modo latam on");
    presence();
 });
let prefix = "?";
const pokemon = {
    aerodactyl:{
        stats: "Attack & Speed", 
        moveset:"ice fang/crunch/sky drop/giga impact or iron head",
        nature:"**Jolly/Adamant**"
    }, // <<-- ESTE DE AQUI para cerrar , no te olvides de la coma
    absol:{
        stats: "Attack & Speed", 
        moveset:"psycho cut/sucker punch/slash/ future sight",
        nature: "**Jolly**"
    },
    gallade:{
       stats: "**Duelish:Atk, Sp.Def & Speed | Off-Duel:Atk & Speed**",  
       moveset: "night slash/leaf blade/close combat/psycho cut",
       nature: "**Jolly**",
    },
    gardevoir:{
       stats: "**Duelish:SpAtk, Sp.Def & Speed | Off-Duel:SpAtk & Speed**",  
       moveset: "",
       nature: "**Modest**",
    },
    salamence:{
       stats: "**Duelish:Atk,Def & Speed | Off-Duel:SpAtk & Speed**",  
       moveset: "crunch/fly/flamethrower/zen headbutt or dragon claw (fire fang wont do more damage)",
       nature: "**Adamant/Jolly**",
    },
    swampert:{
       stats: "**Atk, Def & Spdef**",  
       moveset: "Earthquake, rock slide, hammer arm, muddy water"  ,
       nature: "**Adamant**",
    },
    sceptile:{
       stats: "**SpAtk, Spdef & Spd**",  
       moveset: "",
       nature: "**Timid/Modest**",
    },
    pinsir:{
       stats: "**Duelish:Attack, Defense and Speed | Off-Duel:Attack and Speed**",  
       moveset: "superpower/thrash/brick break/x-scissor"  ,
       nature: "**jolly**",
    },
    metagross:{
       stats: "**Duel:Atk, Def or HP & Spd | Off-Duel: Atk & Spd**",  
       moveset:  "Meteor Mash, Pursuit, Hammer Arm, Zen Headbutt" ,
       nature: "**Adamant/Jolly**",
    },
    scizor:{
       stats: "**Duel:Atk, Def & SpDef**",  
       moveset: "",
       nature: "**Adamant**",
    },
    golisopod:{
       stats: "**Attack & Def**",  
       moveset: "Sucker Punch , First Impression , Rock Smash , Liquidation"  ,
       nature: "**Adamant for +Atk or Jolly for +Speed**",
    },
    gengar:{
       stats: "**Duel:SpAtk, SpDef & Spd | Off-Duel: SpAtk & Spd**",  
       moveset: "",
       nature: "**Timid**",
    },
    heracross:{
       stats: "**Duel:Atk, Def & SpDef| Off-Duel: Atk & Spd**",  
       moveset: "",
       nature: "**Adamant/Jolly**",
    },
    marshadow:{
       stats:  "**Atk & Speed**" ,  
       moveset: "spectral thief/close combat/ice punch/sucker punch",
       nature: "**Adamant +Atk or Jolly +Speed**",
    },
    slowbro:{
       stats: "**Duel:SpAtk & Def**",  
       moveset: "Water pulse/slack off or heal pulse/psychic  ",
       nature: "**Modest**",
    },
    blaziken:{
       stats: "**Duel:Atk & Spd**",  
       moveset:  "blaze kick/high jump kick/brave bird/quick attack" ,
       nature: "**Adamant/Jolly**",
    },
    //aerodactyl ya esta
    slaking:{
       stats: "**Duel:Atk, Def or HP & Spd | Off-Duel: Atk & Spd**",  
       moveset: "Play rough/focus punch/hammer arm/slack off or chip away (learn play rough slakoth, learn focus punch vigoroth) ",
       nature: "**Adamant/Jolly**",
    },
    kyogre:{
       stats: "**Duel:SpAtk, SpDef & Spd or SpAtk & Spd**",  
       moveset: "water spout , ice beam ,  body slam , origin pulse",
       nature: "**Modest/Timid**",
    },
    groudon:{
       stats: "**Duel:Atk, Def & Spd or Atk & Spd**",  
       moveset: "eruption/precipice blades or earthquake /hammer arm/solar beam",
       nature: "**Adamant/Jolly**",
    },
    //es simple solo tenes de hacer esto
}

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return; 
const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
var poke = pokemon[args[1]] // 1 seria areodactyl
if(!poke) return message.reply("Revisa tu ortografia tal ves escribiste mal el nombre del pokemon o Este tag no ah sido creado")
var info = poke[args[2]] // 2 seria stats  
if(!info) return message.reply("Este tag no ah sido creado")
message.channel.send(info)
});
client.login(process.env.aea)

