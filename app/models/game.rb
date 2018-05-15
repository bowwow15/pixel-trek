class Game < ApplicationController
	def self.addPlayer (uuid)
		ActionCable.server.broadcast "global", {action: "spawn_player", spawn: Spawn.getSpawnPoint(uuid)}
	end

	def self.movePlayer (uuid, player)

	end

	def self.newBullet (uuid, bullet)
		ActionCable.server.broadcast "global", {action: "new_bullet", bullet: bullet}
	end

	def self.muzzleFlash (uuid, bullet)
		ActionCable.server.broadcast "global", {action: "muzzle_flash", bullet: bullet, uuid: uuid}
	end

	def self.getPlayerUuid (uuid)
		ActionCable.server.broadcast "player_#{uuid}", {action: "player_uuid", uuid: uuid}
	end
end