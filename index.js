const { Discord ,Client, Intents, Collection, MessageEmbed , hyperlink, Formatters, TextInputComponent ,Modal} = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const ms = require('ms')
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});

let {PREFIX,rulepic ,pichowuss ,answer_howus , pichddf , picanswerhdff , emoji_a , emoji_b , emoji_c , emoji_d , emoji_first , emoji_tiktok , emoji_Youtube,emoji_Insta,emoji_Twitter,pic_media} = require('./JSON/config.json')

client.on('ready',() =>{ 
    console.log('ready');
})
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

client.on('messageCreate',  async (message, msg) =>{


    const sel = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('row')
            .setPlaceholder('أضغط هنا')
            .addOptions([
                {
                    label: 'About us',
                    value: 'B',
                    emoji:emoji_a
    
                },
                {
                     label: 'Rules',
                     value: 'A',
                     emoji: emoji_b
    
                },
                {
                    label: 'Donation',
                    value: 'C',
                    emoji:emoji_c
    
                },
                {
                    label: 'Media',
                    value: 'D',
                    emoji:emoji_d
                },
            ]),
    ); // End of .addComponents()
    
    if(message.content == "server"){
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setStyle('PRIMARY')
                .setLabel('قراءة التعليمات')
                .setEmoji(emoji_first)
                .setStyle('SECONDARY'),
                
        );
        
        message.channel.send({ content: 'اهلًا بكم\n\n\n في سيرفر بلاك موفي لأجل الحصول على اقصى متعة نرجو قرائة التعليمات ! ,', components: [row] });


    } 


    const filter = i => i.customId === 'primary' ;
    const collector = message.channel.createMessageComponentCollector({ filter, });
 
 
    collector.on('collect', async i => {
            await i.reply({ content: 'مالذي تريد معرفته ؟', components: [sel], ephemeral:true }).catch(err=>{
            console.log(err)
        })
    })
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));


})


client.on("interactionCreate", async menuInteraction => {
    const sel = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('row')
        .setPlaceholder('أضغط هنا')
        .addOptions([
            {
                label: 'About us',
                value: 'B',
                emoji:emoji_a

            },
            {
                 label: 'Rules',
                 value: 'A',
                 emoji: emoji_b

            },
            {
                label: 'Donation',
                value: 'C',
                emoji:emoji_c

            },
            {
                label: 'Media',
                value: 'D',
                emoji:emoji_d
            },
        ]),
); // End of .addComponents()

    if (!menuInteraction.isSelectMenu()) return;
                        
    switch (menuInteraction.values[0]) {
        case "A":  
        const PICRUELS = new MessageEmbed()
        .setColor("GREY") 
        .setImage(rulepic);
            
            const ruleembed = new MessageEmbed()
            .setColor("BLACK")
            .setTitle("**أهلا .. يرجى قراءة هذه القوانين بعناية واتباعها .**")
            .setDescription("1. الأحترام بشكل عام وعدم القذف أو التعدي على الأخرين بأي شكل من الأشكال\n\n 2. عدم التحدث بالأمور الدينيه أو السياسيه أو العنصرية أو المواضيع الي تُحدث فتنه وبغض بين الأخرين\n\n3. يمنع النشر بجميع أنواعه ( حسابات , سيرفرات , والخ.. )\n\n 4. يمنع الحرق بجميع أنواعه\n\n 5. يمنع الأسبام بشكل عام\n\n6. يمنع أزعاج الادارة وحتى الاعضاء بأي شكل من الأشكال ( يسمح فقط اذا كان الطرف الأخر موافق )\n\n 7. المشاكل الخارجيه غير مسموحه بالسيرفر\n\n8. يمنع التطرق لمواضيع الغزل أو محاولة التشبيك أو الجنس\n\n9. يمنع الازعاج بالرومات الصوتيه عن طريق تشغيل مقاطع صوتيه أو الـ ساوند باد\n\n10. في حال مواجهة مشكله مع احد الاعضاء يرجى التبليغ عنه وعدم رد الخطيئة بالخطيئة\n\n11. يمنع وضع صور عرض مخلة او أي شي مخل متعلق بواجهة حسابك أو افتعال مشاكل عن طريق الحساب\n\n 12. يمنع أرسال أي نوع من الايموجيات او الكلام والملح للسب او الفاحش\n\n13. التحرش فالخاص أو بالسيرفر عقوبته الباند النهائي , وتحاسب بالخاص اذا كانت اساس المشكله بالسيرفر\n\n `عند مخالفتك للأحة القوانين سيتم التعامل معك بلائحة التحذيرات الخاصة بالادارة ( باند , انذار , ميوت )`            ")
                menuInteraction.update({embeds: [PICRUELS,ruleembed], components:[sel] })
            break;
        case "B":  
        const pic_how_us = new MessageEmbed()
        .setColor("DARK_GREY")
        
        .setImage(pichowuss);
        const pic_answer_howus = new MessageEmbed()
        .setColor("DARK_GREY")
        
        .setImage(answer_howus);

        const pichdf = new MessageEmbed()
        .setColor("LIGHT_GREY")
        
        .setImage(pichddf);
        
        const picanswerhdfff = new MessageEmbed()
        .setColor("LIGHT_GREY")
        
        .setImage(picanswerhdff);

            menuInteraction.update({embeds: [pic_how_us,pic_answer_howus,pichdf,picanswerhdfff] , components:[sel]})
            break;
        case "C": '992129239673491527'
const paypal = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setStyle('LINK')
    .setURL('https://paypal.me/blackmovie1?locale.x=en_USz')
    .setEmoji('992129239673491527')
)
        const c = new MessageEmbed()

        .setImage('https://cdn.discordapp.com/attachments/959108273519357962/1032227835374489610/Donate.png')
            menuInteraction.update({embeds:[c], components:[paypal,sel]})
            break;
        case "D":
            const media = new MessageEmbed()
            .setImage(pic_media)
            const mediaBTN  = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setEmoji(emoji_tiktok)
                    .setURL('https://www.tiktok.com/@bm.ov?_t=8WdlVKZj7gn&_r=1')
                    .setStyle('LINK'),
                    new MessageButton()

                    .setEmoji(emoji_Insta)
                  .setURL('https://instagram.com/blackmovie1?igshid=YmMyMTA2M2Y=')
                    .setStyle('LINK'),
                    new MessageButton()
                    .setEmoji(emoji_Twitter)
                    .setURL('https://twitter.com/blackmovie8?s=21&t=AssDu12mm5FdSVqJGhTNWQ')
                    .setStyle('LINK'),
                    new MessageButton()
                    .setEmoji(emoji_Youtube)
                    .setURL('https://youtube.com/channel/UCKllW6QeTaBU2NE9GYfKVSA')
                    .setStyle('LINK'),

                    


                    
            );
            // const Insta  = new MessageActionRow()
            // .addComponents(
            //     new MessageButton()
            //         .setEmoji(emoji_Insta)
            //         .setURL('https://   .com/blackmovie1?igshid=YmMyMTA2M2Y=')
            //         .setStyle('LINK'),
                    
                
                    
            // );
            // const Twitter  = new MessageActionRow()
            // .addComponents(
            //     new MessageButton()
            //         .setEmoji(emoji_Twitter)
            //         .setURL('https://twitter.com/blackmovie8?s=21&t=AssDu12mm5FdSVqJGhTNWQ')
            //         .setStyle('LINK'),

                    
            // );

        // const Youtube  = new MessageActionRow()
        //     .addComponents(
        //         new MessageButton()
        //             .setEmoji(emoji_Youtube)
        //             .setURL('https://youtube.com/channel/UCKllW6QeTaBU2NE9GYfKVSA')
        //             .setStyle('LINK'),
                
                    
        //     );
            
            menuInteraction.update({embeds:[media], components:[mediaBTN,sel]})
            break;
    };                
});





// client.on('messageCreate', async message =>{
//     //content
//     let targit =  message.mentions.users.first()
    
    
//     if(message.content.startsWith('re')){
//         const timeout_form = new Modal()
    
//         .setCustomId('myModal')
//         .setTitle('My Modal')
//         .addComponents(
            
//             new TextInputComponent()
            
//             .setCustomId('time_out')
//             .setLabel('for how long')
//             .setPlaceholder('1d , 1m ,1h')
//             .setStyle('PARAGRAPH'),
            
//         )
        
        
//         const sel_re = new MessageActionRow()
//         .addComponents(
//             new MessageSelectMenu()
//                 .setCustomId('sel')
//                 .setPlaceholder('أضغط هنا')
//                 .addOptions([
//                     {
//                         label: 'timeout',
//                         value: 'timeout',
//                         emoji:emoji_a
        
//                     },    
//                     {
//                          label: 'ban',
//                          value: 'ban',
//                          emoji: emoji_b
        
//                     },     
//                     {
//                         label: 'mute',
//                         value: 'mute',
//                         emoji:emoji_c
        
//                     },    
//                     {
//                         label: 'nick',
//                         value: 'nick',
//                         emoji:emoji_c
        
//                     },    
//                 ]),    
//         ); // End of .addComponents()    
//                         if(!targit) return message.channel.send({embeds:[new MessageEmbed().setTitle('mentoin')]});
        
                    
//                 const embed_report = new MessageEmbed()
//                 .setTitle('What do u want ? ')
//                 .setDescription('**'+ targit +'**')
                
        
//                 message.channel.send({embeds:[embed_report], components:[sel_re]})
        
        

//         const args = message.content.trim().split(/ +/g);

    
                  

//     }
    
// })
// client.on('interactionCreate', async interaction =>{

//     if(!interaction.isSelectMenu) return;

// switch (interaction.values[0]){
        
//     case'timeout':

//     const model_time = new Modal()
//     .setCustomId('time_model')
//     .setTitle('TIMEOUT ')
//     .addComponents([
//       new MessageActionRow().addComponents(
//         new TextInputComponent()
//           .setCustomId('reason')
//           .setLabel('reason')
//           .setStyle('PARAGRAPH')
//           .setPlaceholder('why?')
//           .setRequired(false),
        

//       ),

//       new MessageActionRow().addComponents(
//         new TextInputComponent()
//           .setCustomId('time')
//           .setLabel('time')
//           .setStyle('PARAGRAPH')
//           .setPlaceholder('1D, 2Y , 2H ,')
//           .setRequired(false),)
//     ]
    
    
    
//     );

//     const row = new MessageActionRow()
//     .addComponents(
//         new MessageButton()
//             .setCustomId('primary')
//             .setStyle('PRIMARY')
//             .setLabel('done')
//             .setEmoji(emoji_first)
//             .setStyle('SECONDARY'),
            
//     );
//     await  interaction.showModal(model_time)
//     interaction.update({content:'done', components:[row]}).catch(err=>{
//         console.log('okay')
//       })

//     break;

  
//     }
// })







client.on('messageCreate', message =>{
    let targit =  message.mentions.users.first()
    const sel_re = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('sel')
            .setPlaceholder('أضغط هنا')
            .addOptions([
                {
                    label: 'timeout',
                    value: 'timeout',
                    emoji:emoji_a
    
                },    
                {
                     label: 'ban',
                     value: 'ban',
                     emoji: emoji_b
    
                },     
                {
                    label: 'mute',
                    value: 'mute',
                    emoji:emoji_c
    
                },    
                {
                    label: 'nick',
                    value: 'nick',
                    emoji:emoji_c
    
                },    
            ]),    
    ); // End of .addComponents()    
    if(message.member.roles.cache.has('1027910685063127141')){

        if(message.content.startsWith('r')){
            if(!targit) return message.channel.send({embeds:[new MessageEmbed().setTitle('mentoin')]});
            
            const sel_re = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('sel')
                    .setPlaceholder('أضغط هنا')
                    .addOptions([
                        {
                            label: 'timeout',
                            value: 'timeout',
                            emoji:emoji_a
            
                        },    
                        {
                             label: 'ban',
                             value: 'ban',
                             emoji: emoji_b
            
                        },     
                        {
                            label: 'mute',
                            value: 'mute',
                            emoji:emoji_c
            
                        },    
                        {
                            label: 'nick',
                            value: 'nick',
                            emoji:emoji_c
            
                        },    
                    ]),    
            ); // End of .addComponents()    
            message.channel.send({components:[sel_re], content:'?'})
            client.on('interactionCreate', async interaction =>{

                if(!interaction.isSelectMenu) return;

            switch (interaction.values[0]){
                    
                case'timeout':
            
                const model_time = new Modal()
                .setCustomId('time_model')
                .setTitle('TIMEOUT ')
                .addComponents([
                  new MessageActionRow().addComponents(
                    new TextInputComponent()
                      .setCustomId('reason')
                      .setLabel('reason')
                      .setStyle('PARAGRAPH')
                      .setPlaceholder('why?')
                      .setRequired(false),
                    
            
                  ),
            
                  new MessageActionRow().addComponents(
                    new TextInputComponent()
                      .setCustomId('time')
                      .setLabel('time')
                      .setStyle('SHORT')
                      .setPlaceholder('1D, 2Y , 2H ,')
                      .setRequired(false),),

                      new MessageActionRow().addComponents(
                        new TextInputComponent()
                          .setCustomId('proof')
                          .setLabel('دليل ')
                          .setPlaceholder('صوره او فيديو')
                          .setStyle('PARAGRAPH')
                          .setRequired(true),)
                          
                      
                ]
                
                
                
                );
            
                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('primary')
                        .setStyle('PRIMARY')
                        .setLabel('done')
                        .setEmoji(emoji_first)
                        .setStyle('SECONDARY'),
                        
                );
                await  interaction.showModal(model_time)

                break;
                
client.on('interactionCreate', interaction =>{
    if (!interaction.isModalSubmit()) return;
    const time = interaction.fields.getTextInputValue('reason');
    interaction.deferReply(`${time}`)
})



                interaction.update({content:'done', components:[row]}).catch(err=>{
                    console.log('okay')
                  })
            
                
            
              
                }
            })
            
            
            

        }
    }
    


})










client.login(TOKEN);