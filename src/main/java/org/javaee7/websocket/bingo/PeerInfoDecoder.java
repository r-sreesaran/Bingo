/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package org.javaee7.websocket.bingo;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

/**
 *
 * @author sree
 */
public class PeerInfoDecoder implements Encoder.Text<PeerInfo> {

    @Override
    public String encode(PeerInfo arg0) throws EncodeException {
        return null;
         //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println("init");
    }

    @Override
    public void destroy() {
     System.out.println("desroy");
    }
 
}
