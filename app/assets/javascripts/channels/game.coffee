App.game = App.cable.subscriptions.create "GameChannel",
  connected: ->
    # Called when the subscription is ready for use on the server
    @perform 'getPlayerUuid' #gets the players uuid from server... broadcasts from controller.
    @perform 'getAllPlayers'

  disconnected: ->
    # Called when the subscription has been terminated by the server
    @perform 'unsubscribed'

  received: (data) ->
    switch data.action
    	when "player_uuid"
    		Player.uuid = data.uuid;
    	when "all_players"
    		ServerPlayer.getAllPlayers(data.players);
    	when "send_player_coordinates"
    		Server.movePlayer(eval(data.uuid), eval(data.coordinates));
  
  
  movePlayer: (player) ->
    @perform 'movePlayer', player: player

  stopMovingPlayer: ->
  	@perform 'stopMovingPlayer'
  
  newBullet: (bullet) ->
    @perform 'newBullet', bullet: bullet

  muzzleFlash: (bullet) ->
  	@perform 'muzzleFlash', bullet: bullet

  checkTimeout: ->
  	@perform 'checkTimeout'

  resetPlayer: (player) ->
  	@perform 'resetPlayer', player: player