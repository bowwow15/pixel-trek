App.global = App.cable.subscriptions.create "GlobalChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
  	switch data.action
	  	when "spawn_player"
	    	Server.addPlayer(data.spawn.x, data.spawn.y, data.spawn.state, data.spawn.uuid);

	    when "remove_player"
	    	Server.removePlayer(data.uuid);

	    when "move_player"
	    	Server.movePlayer(data.player.uuid, data.player.x, data.player.y);

	    when "new_bullet"
	    	Bullet.new(data.bullet.type, data.bullet.x, data.bullet.y, data.bullet.radian);

	    when "muzzle_flash"
	    	ServerWeapons.drawMuzzleFlash(0 + data.bullet.spawnX, 0 + data.bullet.spawnY, data.bullet.radian, data.uuid);
