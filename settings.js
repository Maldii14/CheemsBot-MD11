//base by M.M
//re-upload? recode? copy code? give credit ya :)
//YouTube: @M.MAK
//Instagram: Maldives_mak
//Telegram: t.me/Official_Maldives
//GitHub: @Maldii14
//WhatsApp: +254758732775
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"kNgM/3yPA88G8ZgBOKy+8UzNMNI79OnT1dUCu9ee0E4="},"public":{"type":"Buffer","data":"ZGGpooSPJ3AqFIb3i00ouoTWtLfH9MTnCPhD2xq3AzA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WEl7B+izbY+JU4bJbvUdwZMG5+5P1PZ/FbvWcxhutlU="},"public":{"type":"Buffer","data":"czDqAnyO+VARu/F4DjLEfkFoMmaK1wllic6Rx/m0PGc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"2Hg7rqYLOYM5g6jwMhUOE0/vr29rvRLr39RpGPJYokg="},"public":{"type":"Buffer","data":"4a96nH1k1lWf458+ctHN7AKuoHYSi/AqqEr00GGE1Sg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kEAmtDYW4mQKjt001th+DcQ+M1BL6yTIwev6ubF//0Y="},"public":{"type":"Buffer","data":"cvN6gn2RNNgAnENCKJDT8nIrg8eOZ6qlwxxlxpa/IDM="}},"signature":{"type":"Buffer","data":"p6pjf5cwl7Ap3YC3f7iD8L6WHfDXSsB3lD8F7px6fG5G8QiXv1JtFbHA8dpMjfzDBCzsTK78nYQE3MBmhDvvgA=="},"keyId":1},"registrationId":72,"advSecretKey":"FC4PsetomcIZv9w1C1WtuGZLI7iWEvNBKFp8cAnu1TA=","processedHistoryMessages":[],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"RvwHln-gQaGhDZ3Nkd4Mcw","phoneId":"edbed79d-f0f9-49b9-b9b0-2f6c913ef925","identityId":{"type":"Buffer","data":"Kw36CrsU9bogGRk5fcnoWCDh72A="},"registered":true,"backupToken":{"type":"Buffer","data":"Stg/4Oog8PYVyU7j1D/2nhvjHBA="},"registration":{},"pairingCode":"1CWX8BZZ","me":{"id":"254758732775:5@s.whatsapp.net","name":"MALDIVES MAK ∆","lid":"247588171321377:5@lid"},"account":{"details":"CJvOrqQCEM2StLUGGAEgACgA","accountSignatureKey":"GuDOzG8OlXue3vqO73gD5L3wEJ5lLUZgof5fbXI53ww=","accountSignature":"wGBmS3Mmy/76RBsEc6s/gm/XJ2vVt4xPckMMwnGCco9a8dbS3HGeREfH5GMKuEz/kgW/1O+loP2J4eYcPDdyBw==","deviceSignature":"wVtDMP4fUihfIUyLgYEh1QojltWZ0mqwOU9AM7drnSI1mfunve0kOeLSD5CvL7N0KJA/3uZDpZIIfKhvCnSIjQ=="},"signalIdentities":[{"identifier":{"name":"254758732775:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRrgzsxvDpV7nt76ju94A+S98BCeZS1GYKH+X21yOd8M"}}],"platform":"smba","lastAccountSyncTimestamp":1722616144,"myAppStateKeyId":"AAAAAGnw"}'

//owmner v card
global.ytname = "YT: Maldives mak" //ur yt chanel name
global.socialm = "GitHub: Maldii14" //ur github or insta name
global.location = "Kenya, Nairobi, Nairobi" //ur location

//new
global.botname = 'KING M v1' //ur bot name
global.ownernumber = '254758732775' //ur owner number
global.ownername = 'Maldives mak' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R"
global.themeemoji = '🌿'
global.wm = "M Bot Inc."
global.botscript = 'https://github.com/Maldii14/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = " MKM\n\n+254758732775"
global.creator = "254758732775@s.whatsapp.net"
global.xprefix = '*',''
global.premium = ["254758732775"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '263' //set autoblock country code
global.antiforeignnumber = '234' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
