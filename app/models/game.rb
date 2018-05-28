class Game < ApplicationController
	def self.addPlayer (uuid)
		ActionCable.server.broadcast "global", {action: "spawn_player", spawn: Spawn.getSpawnPoint(uuid), uuid: uuid}

		REDIS.set("player_#{uuid}", Spawn.getSpawnPoint(uuid))
	end

	def self.removePlayer (uuid)
		ActionCable.server.broadcast "global", {action: "remove_player", uuid: uuid}
		REDIS.del("player_#{uuid}")
	end

	def self.movePlayer (uuid, player)
		ActionCable.server.broadcast "global", {action: "move_player", player: player}
	end

	def self.stopMovingPlayer (uuid)
		ActionCable.server.broadcast "global", {action: "stop_moving_player", uuid: uuid}
	end

	def self.newBullet (uuid, bullet)
		ActionCable.server.broadcast "global", {action: "new_bullet", bullet: bullet, uuid: uuid}
	end

	def self.deleteBullet (uuid, index)
		ActionCable.server.broadcast "global", {action: "delete_bullet", index: index, uuid: uuid}
	end

	def self.muzzleFlash (uuid, bullet)
		ActionCable.server.broadcast "global", {action: "muzzle_flash", bullet: bullet, uuid: uuid}
	end

	def self.addParticle (uuid, particle)
		ActionCable.server.broadcast "global", {action: "add_particle", particle: particle, uuid: uuid}
	end

	def self.getPlayerUuid (uuid)
		ActionCable.server.broadcast "player_#{uuid}", {action: "player_uuid", uuid: uuid}
	end

	def self.getAllPlayers (uuid)
		players = REDIS.keys("player_*")

		index = 0
		players.each do |p|
			players[index] = p.split("player_")[1] #gets uuid (after "player_")
			index += 1
		end

		ActionCable.server.broadcast "player_#{uuid}", {action: "all_players", players: players}
	end

	def self.checkTimeout

	end

	def self.resetPlayer (uuid, player)
		ActionCable.server.broadcast "global", {action: "reset_player", player: player, uuid: uuid}
	end
end