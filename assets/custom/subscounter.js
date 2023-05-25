// users
const botToken = '6276949802:AAEuoKA2dcv4qC0dpLDIp_aztrGzb7kWPg8';
const channelName = 'memeremoded';

const apiUrl = `https://api.telegram.org/bot${botToken}/getChatMembersCount?chat_id=@${channelName}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const subscribersCount = data.result;
    new PureCounter({
      // Setting that can't' be overriden on pre-element
      selector: ".wenusersir", // HTML query selector for spesific element

      // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
      start: 0, // Starting number [uint]
      end: subscribersCount, // End number [uint]
      duration: 2, // The time in seconds for the animation to complete [seconds]
    });
  }).catch(error => console.error(error));

// downloads
let dl_count = 500 + Number(localStorage.getItem("wendownloadsir"));
new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".wendownloadsir", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: dl_count, // End number [uint]
  duration: 2, // The time in seconds for the animation to complete [seconds]
});