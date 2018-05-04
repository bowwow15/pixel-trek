App.game = App.cable.subscriptions.create "GameChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    switch data.action
    	when "send_player_coordinates"
    		Socket.movePlayer(eval(data.uuid), eval(data.coordinates));
