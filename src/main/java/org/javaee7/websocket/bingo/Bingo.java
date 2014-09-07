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
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * @author sree
 */
@ServerEndpoint(value = "/websocket",
        encoders = {FigureEncoder.class},
        decoders = {FigureDecoder.class})
public class Bingo {

    private static final Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());
    private static JSONArray peerInfoJson = new JSONArray();
    
    @OnOpen
    public void onOpen(Session peer) throws IOException, EncodeException {
        peers.add(peer);
        addPeerInformation(peer);
    }

    // check the corner case what will happen if the last peer is removed 
    @OnClose
    public void onClose(Session peer) throws EncodeException, IOException {
       peers.remove(peer);
       //removePeerInformation(peer);
        for (Session individualPeer : peers) {
                individualPeer.getBasicRemote().sendObject("hi");
            }
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

    /**
     * This method is for transmitting the peer information to all peers
     *
     * @param peer
     * @throws IOException
     * @throws EncodeException
     */
    public static void addPeerInformation(Session peer) throws IOException, EncodeException {
         peerInfoJson.add(constructPeerInformation(peer));
         peer.getBasicRemote().sendObject(constructPeerInformation(peer).toString()); 
         for (Session individualPeer : peers) {
                individualPeer.getBasicRemote().sendObject(peerInfoJson.toString());
            }
    } 

    /**
     * This method will remove the peer information from the json Array
     *
     * @param peer
     * @param PeerInfoJson
     * @throws IOException
     * @throws EncodeException
     */
    

    /**
     * This method will construct the jsonObject
     *
     * @param peer
     * @return
     */
    public static String constructPeerInformation(Session peer) {
        JSONObject peerInfo = new JSONObject();
        peerInfo.put("type", "Id Description");
        peerInfo.put("id", peer.getId());
        int position = peerInfoJson.size();
        peerInfo.put("pos",position);
        return  peerInfo.toString();
        
    }
    
}
