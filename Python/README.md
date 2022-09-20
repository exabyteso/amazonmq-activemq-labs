1. Browse to `cd ~/environment/amazonmq-activemq-labs/Python`

2. Execute `python3 -m venv stomptest` to create a virtual environment for the stomp dependency.

3. Activate the virtual environment by executing `source stomptest/bin/activate`.

4. Install the dependencies by executing `pip install -r requirements.txt`.

5. Browse to the stomp-producer.py and stomp-consumer.py files in Cloud9 console on the left. Open both files and make the below changes: 

 *a. Prepend your @handle after the destination section in lines 33 and 34 of stomp-producer.py e.g. /queue/@myhandle-non-persistent 
 *b. Prepend your @handle after the destination section in line 27 of stomp-consumer.py e.g. /queue/@myhandle-non-persistent.

6. Execute the stomp-producer.py in one terminal i.e. `python stomp-producer.py`.

7. Execute the stomp-consumer.py in another terminal i.e. `python stomp-consumer.py`. (ensure to activate stomptest: `source stomptest/bin/activate`)
