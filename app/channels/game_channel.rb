class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "player_#{uuid}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def movePlayer (data)
  	Game.movePlayer(uuid, data)
  end	

  def getPlayerUuid
  	Game.getPlayerUuid(uuid)
  end
end
