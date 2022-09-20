#Producer

import time
import stomp
import logging
#logging.basicConfig(level=logging.DEBUG)

class MyListener(stomp.ConnectionListener):
    def on_message(self, headers, message):
        print('MyListener:\nreceived a message "{}"\n'.format(message))
        global read_messages
        read_messages.append({'id': headers['message-id'], 'subscription':headers['subscription']})


class MyStatsListener(stomp.StatsListener):
    def on_disconnected(self):
        super(MyStatsListener, self).on_disconnected()
        print('MyStatsListener:\n{}\n'.format(self))


hosts = [('b-c27c63a1-334d-475d-8e86-85c15f4ec102-1.mq.eu-west-1.amazonaws.com', '61614')]

conn = stomp.Connection(host_and_ports=hosts)
conn.set_listener('my_listener', MyListener())
conn.set_listener('stats_listener', MyStatsListener())
conn.set_ssl(for_hosts=hosts)
conn.connect('workShopUser', 'workShopUser', wait=True)

#Send persistent and non-persistent messages
i = 1
while True:
    # Change the value after queue/ to your @handle for both lines 33 and 34
    conn.send(body="Message"+str(i), destination='/queue/non-persistent')
    conn.send(body="Message"+str(i), destination='/queue/persistent', headers={'persistent' :'true'})
    i = i + 1
    print("Sent message " + str(i) +  " successfully")
conn.disconnect()