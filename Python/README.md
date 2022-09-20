1. Execute `python3 -m venv stomptest` to create a virtual environment for the stomp dependency.

2. Activate the virtual environment by executing `source stomtest/bin/activate`.

3. Install the dependencies by executing `pip install -r requirements.txt`.

4. Modify the code in lines 33 and 34 of stomp-producer.py to have your @handle for example myname@.

5. Modify line 27 of stomp-consumer.py to have your @handle as well.

6. Execute the stomp-producer.py in one terminal.

7. Execute the stomp-consumer.py in another terminal.

