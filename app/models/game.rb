class Game < ApplicationController
	def self.movePlayer (uuid, object)

	end

	def self.getPlayerUuid (uuid)
		ActionCable.server.broadcast "player_#{uuid}", {action: "player_uuid", uuid: uuid}
	end
end