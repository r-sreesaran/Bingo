package org.javaee7.websocket.bingo;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 * @author sree
 */
@ServerEndpoint(value = "/websocket",
        encoders = {FigureEncoder.class},
        decoders = {FigureDecoder.class})
public class Bingo {

    private static final Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());
    private PeerInfo info = new PeerInfo();
    
    @OnOpen
    public void onOpen(Session peer) {
        peers.add(peer);
        info.
    }

    @OnClose
    public void onClose(Session peer) {
        peers.remove(peer);
    }

    @OnMessage
    public void broadcastFigure(Figure figure, Session session) throws IOException, EncodeException {
        System.out.println("boradcastFigure: " + figure);
        for (Session peer : peers) {
            if (!peer.equals(session)) {

                peer.getBasicRemote().sendObject(figure);
            }
        }
    }

    public void transmitPeerInformation() {
        
        for (Session peer : peers) {
        //      peer.getBasicRemote().sendObject(figure);
        }
    }

}
