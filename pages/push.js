var webpush = require('web-push');
 
// VAPID keys should only be generated only once.
const vapidKeys = {
    "publicKey" : "BGBqIfFicHMDtssZmAwyX134fOqzDFJFD-IAjtEprSJ295qXXYoH20sCnwRaj3ju1A4a_NlHAEzGgM9qey1RRyU",
    "privateKey" : "Jde57dmA-c9pSRC8UpjyTqVAXoeMf7f3QyfAyruYqB8"
};
 

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
 
// This is the same output of calling JSON.stringify on a PushSubscription
var pushSubscription = {
  "endpoint": "<Endpoint URL>",
 " keys": {
    "p256dh": "<p256dh Key>",
    "auth": "<Auth key>"
  }
};
 
var payload = 'Selamat! Aplikasi Anda sudah dapat notif push';
var options ={
    gcmAPIKey: '100470329112',
    TTL: 60
};
webpush.sendNotification(
pushSubscription,
payload,
options
);