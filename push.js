 var push = require('web-push')

 let vapidKeys = {
  publicKey: 'BOONCZC2LY_fZv2H3VfYU_wvg9QF1ddFwA04V3KVTpkkD2tyRaAEeJiltsX7axkLoQgPR2Vabb44MwQKt6CXPqs',
  privateKey: 'N0M54EqD6sNs6ttrj-kWPektDsTONKLEnlOGBg0crm0'
}

push.setVapidDetails('mailto:yarikfastov@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');
 