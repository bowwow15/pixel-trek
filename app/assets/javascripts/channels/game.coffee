App.game = App.cable.subscriptions.create "GameChannel",
  connected: ->
    # Called when the subscription is ready for use on the server
    @perform 'getPlayerUuid' #gets the players uuid from server... broadcasts from controller.

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    switch data.action
    	when "player_uuid"
    		Player.uuid = data.uuid;
    	when "send_player_coordinates"
    		Server.movePlayer(eval(data.uuid), eval(data.coordinates));


movePlayer: (object) ->
	@perform 'movePlayer', object: object

