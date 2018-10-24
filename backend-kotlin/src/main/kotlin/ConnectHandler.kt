import com.corundumstudio.socketio.SocketIOClient
import com.corundumstudio.socketio.listener.ConnectListener

class ConnectHandler : ConnectListener {
    override fun onConnect(client: SocketIOClient?) {
        println("client connected");
    }

}