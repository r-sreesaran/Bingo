<%-- 
    Document   : index
    Created on : Aug 19, 2014, 9:41:19 PM
    Author     : sree
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8 />
        <title>Bingo - Card</title>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
        <!--[if IE]>
                <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <script type="text/javascript" src="assets/js/intialize.js"></script>
        <script type="text/javascript" src="assets/js/Bingo.js"></script>
        <script type="text/javascript" src="assets/js/websocket.js"></script>


        <link rel="stylesheet" type="text/css" media="screen" href="assets/css/style.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="assets/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="assets/css/bootstrap.min.css" />


    </head>
    <body>
        <div id="group1">
            <div id="page">
                <center >
                    <table >
                        <tr  >
                            <td id="1"  value="false">&nbsp;</td>
                            <td id="2"  value="false">&nbsp;</td>
                            <td id="3" value="false">&nbsp;</td>
                            <td id="4" value="false">&nbsp;</td>
                            <td id="5" value="false">&nbsp;</td>
                        </tr>
                        <tr>
                            <td id="6"  value="false">&nbsp;</td>
                            <td id="7"  value="false">&nbsp;</td>
                            <td id="8" value="false">&nbsp;</td>
                            <td id="9" value="false">&nbsp;</td>
                            <td id="10" value="false">&nbsp;</td>
                        </tr>
                        <tr>
                            <td id="11" value="false">&nbsp;</td>
                            <td id="12" value="false">&nbsp;</td>
                            <td id="13" value="false">Free</td>
                            <td id="14" value="false">&nbsp;</td>
                            <td id="15" value="false">&nbsp;</td>
                        </tr>
                        <tr>
                            <td id="16"  value="false">&nbsp;</td>
                            <td id="17"  value="false">&nbsp;</td>
                            <td id="18" value="false">&nbsp;</td>
                            <td id="19" value="false">&nbsp;</td>
                            <td id="20" value="false">&nbsp;</td>
                        </tr>
                        <tr>
                            <td id="21"  value="false">&nbsp;</td>
                            <td id="22" value="false">&nbsp;</td>
                            <td id="23" value="false">&nbsp;</td>
                            <td id="24" value="false">&nbsp;</td>
                            <td id="25" value="false">&nbsp;</td>
                        </tr>
                    </table>
                 <!--  <h3><a href="#" id="newCard" >Click me for a new card</a></h3> -->
                </center>
                <button type="button" class="btn btn-sm btn-danger" id="submit" onclick="evaluvateTable()">Submit</button> 
                <button type="button" class="btn btn-sm btn-success color" id="green" >green</button> 
                <button type="button" class="btn btn-sm btn-warning color" id="yellow">yellow</button> 
            </div>
        </div>

    </body>
</html>