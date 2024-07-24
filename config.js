const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066189173";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_06_46_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFFrOFVUS1pLSDFDdXUwVDJ6bUdKaHFvWk1MU0tWcUNRbUIwckxXbkUzTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY2MTg5MTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QkFCRTQ0NThCQjVGRTk0N0E0RkNDMTcxNjAxM0M0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MDM2MDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY2MTg5MTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOUM4REQ1MzMyNEM1RjhGNUQ3MEQ1RjA0QzA1QTA1QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MDM2MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieTJpeGQ1amNSVnljaG5PRmVTWHZzUVwiLFxuICBcInBob25lSWRcIjogXCI5Yzk4NjljOS1hODExLTRkNDItYWM2MS03MjQ3MzFkMDllNmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAyMjYsXG4gICAgICA5MCxcbiAgICAgIDc1LFxuICAgICAgMTM4LFxuICAgICAgMTY3LFxuICAgICAgMzMsXG4gICAgICAzOSxcbiAgICAgIDE3NyxcbiAgICAgIDEsXG4gICAgICAxOTMsXG4gICAgICAxNjMsXG4gICAgICAzNSxcbiAgICAgIDkxLFxuICAgICAgMjA3LFxuICAgICAgMjE4LFxuICAgICAgMjQ3LFxuICAgICAgODksXG4gICAgICAyNDQsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMjM2LFxuICAgICAgNzcsXG4gICAgICAyNDcsXG4gICAgICAxODMsXG4gICAgICAxNzIsXG4gICAgICAyMjIsXG4gICAgICA2MSxcbiAgICAgIDE1MixcbiAgICAgIDIxMSxcbiAgICAgIDQwLFxuICAgICAgNzEsXG4gICAgICAxMjQsXG4gICAgICA2NSxcbiAgICAgIDE0MyxcbiAgICAgIDg2LFxuICAgICAgNzIsXG4gICAgICAxNTcsXG4gICAgICA0LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc3M0VIVFo5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MTg5MTczOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyMzA3MTU3NzA0NzgzOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR29kJ3NQcmluY2VcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM1VnVGNReWNhQ3RRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlkZkliUlNic1BhUGYwbks3SlNSZVBwY0NpWXFZanBFZG4xUmxvenM4a2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejdTaDUvczRzRFBSRmt4djkxZW83bHRtTUh1QXlxN0tjTDQyV1gzSFBkaXJCeHhFUVlCZzFCeEhJK2RjT3ovdUErenQ5M0VRZGkvSVJFVStpS2pLQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQVAzREtLaHpwVm5MOHlLOVVJejVlYzJXRUJGcHpMQnBEZG5INjZ4Y2ZINUU0M2hxV25hYXRxYlBZNW5YQ1NhWDZNSmRtWG9oS3FRUzFlNTBCL2JKaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NjE4OTE3MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgwMzU5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1DalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUNqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiblFVZElGUXVMYTBMTDRBL1ZEckx6Vkc5TDFYY1FRc3BaUmZ4RGJhdzVWZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTUzNzA1NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTgwMzU5OTY5NVwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
