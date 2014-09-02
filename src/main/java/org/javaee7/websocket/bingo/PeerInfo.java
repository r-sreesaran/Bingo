package org.javaee7.websocket.bingo;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author sree
 */
import org.json.simple.JSONObject;

public class PeerInfo {

    JSONObject peerInfo;

    PeerInfo(String id) {
        peerInfo = new JSONObject();
        peerInfo.put("Type", "Id Description");
        peerInfo.put("id", id);
    }

    public JSONObject getJSONObject() {
    return peerInfo;
    }
}
