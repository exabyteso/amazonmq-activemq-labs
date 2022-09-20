1. Browse to `cd ~/environment/amazonmq-activemq-labs/Javascript`

2. Execute npm install @stomp/stompjs ws.

3. Browse to the producer.js and consumer.js files in Cloud9 console on the left. Open both files and make the below changes: 

* a. Prepend your @handle after the destination section in line 54 of the producer.js script e.g. /queue/@myhandle-non-persistent.
* b. Prepend your @handle after the destination section in line 44 of the consumer.js file e.g. /queue/@myhandle-non-persistent.

5. Execute the producer with `node producer.js`.

6. Execute the consumer with `node consumer.js`.
