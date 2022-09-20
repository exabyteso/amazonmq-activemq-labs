#Consumer

import time
import stomp
import logging
logging.basicConfig(level=logging.DEBUG)

class MyListener(stomp.ConnectionListener):
    def __init__(self, conn):
        self.conn = conn
        
    def on_message(self, headers, body):
        print('MyListener:\nreceived a message "{}"\n'.format(body))
        read_messages.append({'id': headers['message-id'], 'subscription':headers['subscription']})
        
    def on_disconnected(self):
        connect_and_subscribe(self.conn)


class MyStatsListener(stomp.StatsListener):
    def on_disconnected(self):
        print("Disconnected \n")
        super(MyStatsListener, self).on_disconnected()
        print('MyStatsListener:\n{}\n'.format(self))
        
        
def connect_and_subscribe(conn):
    conn.connect('workShopUser', 'workShopUser', wait=True)
    conn.subscribe(destination='/queue/persistent', id=1, ack='auto')
    # conn.subscribe(destination='/queue/persistent', id=3, ack='client-individual')


read_messages = []
hosts = [('b-c27c63a1-334d-475d-8e86-85c15f4ec102-1.mq.eu-west-1.amazonaws.com', '61614')]

conn = stomp.Connection(host_and_ports=hosts)
conn.set_listener('my_listener', MyListener(conn))
conn.set_listener('stats_listener', MyStatsListener())
conn.set_ssl(for_hosts=hosts)

connect_and_subscribe(conn)
time.sleep(60)
conn.disconnect()