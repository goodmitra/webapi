const {  default: makeWASocket,  DisconnectReason,  useSingleFileAuthState,MessageType, MessageOptions, Mimetype
} = require("@adiwajshing/baileys");

const pino = require("pino");
const fs = require("fs");
const { Console } = require("console");
const path = "./core/";
let x;

exports.gas = function (msg, no, to, type) {
  const numb = no + ".json"; 
  connect(numb, msg, to, type)
  return;   
};

async function connect(sta, msg, to, type) {
  const { state, saveState } = useSingleFileAuthState(path.concat(sta));
  
  const sock = makeWASocket({
    auth: state,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "fatal" }),
    browser: ["FFA", "EDGE", "1.0"],
  });
let retdatan;
let retdatan1;
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (connection == "connecting") return;

    if (connection === "close") {
      let statusCode = lastDisconnect.error?.output?.statusCode;

      if (statusCode === DisconnectReason.restartRequired) {
        return;
      } else if (statusCode === DisconnectReason.loggedOut) {
        if (fs.existsSync(path.concat(sta))) {
          fs.unlinkSync(path.concat(sta));
        }
        return;
      }
    } else if (connection === "open") {
      if (msg != null && to != null) {
        for (let x in to) {
          const id = to[x] + "@s.whatsapp.net";
          if (type === "chat") {
              
            // sock.sendMessage(id, { text: msg, });
            

const result = await sock.onWhatsApp(id);
  if(result.length>0){     
      if (result[0].exists === true) {  
    console.log(JSON.stringify(result));
    console.log('This No is on Whatsapp');
    sock.sendMessage(id, { text: msg, });   
     retdatan="1";
     retdatan1="ok1";
     return;
   //  firstFunction(retdatan);
   //  return retdatan;
   
    // let first_promise = new Promise((resolve, reject) => resolve(kol));
 //return sock.first_promise;
  }
  else{
    console.log(id+' Not exists on WhatsApp');
    return;  
  }
}
else
{ console.log(JSON.stringify(result));
  console.log('Sorry This No is Not Whatsapp');  
  retdatan="2";
  retdatan1="no1";
  return;
 /*
  return new Promise((resolve, reject) => {
    if (retdatan === 1) {
      resolve("ok doene");
    }
    else
    {
      reject("Not doene");
    }    
  });*/
 // let first_promise2 = new Promise((resolve, reject) => resolve(error));
  //return sock.ev.error;
  
   //return  retdatan;
}
             
          }
          

          //msg end
         /* 
         
            if (type === "chat") {
              
             sock.sendMessage(id, {
              text: msg,
            });
          }
         
          if (type === "image") { 
              const myArray = msg.split("|");
             sock.sendMessage(id, {
             // text: msg,
                image: {url: myArray[0]},
                caption: myArray[1],
               // gifPlayback: true
                 jpegThumbnail: true
                // originalThumbnailUrl: myArray[0]
               // jpegThumbnail = data.toString('base64');
                
            });
          }
          //ing end
          
          if (type === "document") { 
            const myArray = msg.split("|");
           sock.sendMessage(id, {          
              document: {url: myArray[0]},              
              caption: myArray[1]
          });
          
          }
          */
         //doc end 
         
        }
      }
    }
  });

  sock.ev.on("creds.update", saveState);
  return sock;
  
}
