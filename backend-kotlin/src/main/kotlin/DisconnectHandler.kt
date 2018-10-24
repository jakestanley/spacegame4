import com.corundumstudio.socketio.SocketIOClient
import com.corundumstudio.socketio.listener.DisconnectListener

class DisconnectHandler : DisconnectListener {
    override fun onDisconnect(client: SocketIOClient?) {
        println("client disconnected");
    }
}