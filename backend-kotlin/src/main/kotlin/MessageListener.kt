import com.corundumstudio.socketio.AckRequest
import com.corundumstudio.socketio.SocketIOClient
import com.corundumstudio.socketio.listener.DataListener

class MessageListener() : DataListener<Message> {
    override fun onData(client: SocketIOClient?, payload: Message?, request: AckRequest?) {
        println(String.format("Received message: %s", payload!!.message));
    }
}