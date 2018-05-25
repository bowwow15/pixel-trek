class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "player_#{uuid}"

    Game.addPlayer(uuid)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    Game.removePlayer(uuid);
  end

  def movePlayer (data)
  	Game.movePlayer(uuid, data['player'])
  end	

  def stopMovingPlayer
  	Game.stopMovingPlayer(uuid)
  end

  def newBullet (data)
  	Game.newBullet(uuid, data['bullet'])
  end

  def muzzleFlash (data)
  	Game.muzzleFlash(uuid, data['bullet'])
  end

  def getPlayerUuid
  	Game.getPlayerUuid(uuid)
  end

  def getAllPlayers
  	Game.getAllPlayers(uuid)
  end

  def checkTimeout
  	Game.checkTimeout()
  end
end
