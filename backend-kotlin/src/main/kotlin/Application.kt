import com.corundumstudio.socketio.*;

import java.lang.Math.*

fun main(args: Array<String>) {
    println("hello world");
//    move(1.0f, Coordinate(0.0f, 0.0f));

    val port = 12555;

    val config = Configuration();
    config.hostname = "localhost";
    config.port = port;

    val server = SocketIOServer(config);
    server.addConnectListener(ConnectHandler())
    server.addEventListener("message", Message::class.java, MessageListener());
    server.addDisconnectListener(DisconnectHandler())


    server.start();
//    while (true) {
//        println("loop")
//        Thread.sleep(1000);
//    };
}

//fun sendMessage(session: WsSession) {
//    session.send("{ 'message': 'hello' }")
//}

fun move(speed: Double, angleInDegrees: Double, start: Coordinate): Coordinate {
    println(String.format("speed: %f", speed));

    val angleInRadians = toRadians(angleInDegrees);

    val x = start.x + (speed * sin(angleInRadians));
    val y = start.y + (speed * cos(angleInRadians));

    return Coordinate(x, y);
}