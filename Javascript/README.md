1. Execute `npm install @stomp/stompjs ws`.

2. Prepend your @handle after the destination section in line 54 of the producer.js script e.g. `/queue/@myhandle-non-persistent`.

3. Prepend your @handle after the destination section in line 44 of the consumer.js file e.g. `/queue/@myhandle-non-persistent`.

4. Execute the producer with `node producer.js`.

5. Execute the consumer with `node consumer.js`.


