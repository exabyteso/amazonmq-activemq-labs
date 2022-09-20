StompJs = require('@stomp/stompjs');
WebSocket = require('ws');

const brokerConnectionString1 = "wss://b-bbc27a1c-32ea-4be5-8083-b10c2e37cc65-1.mq.eu-west-2.amazonaws.com:61619"; //Enter broker connection string
const brokerConnectionString2 = "wss://b-bbc27a1c-32ea-4be5-8083-b10c2e37cc65-2.mq.eu-west-2.amazonaws.com:61619"; //Enter broker connection string

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

    connectionTimeout: 5000
};

// Create an instance
const stompClient = new StompJs.Client(stompConfig);

// Attempt to connect
stompClient.activate();

stompClient.onConnect = async() =>{
  let i = 1;
  while(true){
    let destination = "/queue/persistent";
    stompClient.publish({ destination: destination, body: `Hello world ${i}` }); 
    
    // Send persistent messages
    //stompClient.publish({ destination: destination, body: 'Hello world', headers: {'persistent': true} }); 
    console.log(`Published message ${i} to ${destination} successfully`);
    i = i + 1;
    
    // Wait for 500 milliseconds between publishes to allow ActiveMQ to keep up with the publish rate.
    await sleep(500);
  }
  
  stompClient.deactivate();
}