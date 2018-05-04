class GameChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def movePlayer (data)
  	Game.movePlayer(uuid, data)
  end	
end
