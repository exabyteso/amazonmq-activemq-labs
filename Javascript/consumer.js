StompJs = require('@stomp/stompjs');
WebSocket = require('ws');

const brokerConnectionString1 = "wss://b-c27c63a1-334d-475d-8e86-85c15f4ec102-1.mq.eu-west-1.amazonaws.com:61619"; //Enter broker connection string
const brokerConnectionString2 = "wss://b-c27c63a1-334d-475d-8e86-85c15f4ec102-2.mq.eu-west-1.amazonaws.com:61619"; //Enter broker connection string

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

const stompConfig = {
    // Typically login, passcode and vhost
    // Adjust these for your broker
    connectHeaders: {
      login: "workShopUser", //Username
      passcode: "workShopUser" //Password
    },

    beforeConnect: () => {
      // Change the broker URL that the client connects to before the connection attempt is made
      // This is how to use this client for an Active/ Standby deployment or network of brokers deployment for example
      console.log(`Broker connection string: ${stompClient.brokerURL}`);
      if(stompClient.brokerURL == brokerConnectionString1){
        stompClient.brokerURL = brokerConnectionString2;
      }else if(stompClient.brokerURL == brokerConnectionString2){
        stompClient.brokerURL = brokerConnectionString1;
      }
    },

    // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
    brokerURL: brokerConnectionString1,

    // Keep debug logging off in production
    // Skip this key to disable
    // debug: function (str) {
    // console.log('STOMP: ' + str);
    // },

    // If disconnected, it will retry after 200ms
    reconnectDelay: 200,

    // Subscriptions should be done inside onConnect as those need to reinstated when the broker reconnects
    onConnect: function (frame) {
      console.log(`Connected to: ${stompClient.brokerURL}`);
      // stompClient.publish({destination: '/topic/chat', body: "Hello there"});
      const subscription = stompClient.subscribe('`/queue/@myhandle-non-persistent`', async (message) => {
          await sleep(500);
          console.log(message.body);
      });
    },

    connectionTimeout: 5000
};

// Create an instance
const stompClient = new StompJs.Client(stompConfig);

// Attempt to connect
stompClient.activate();