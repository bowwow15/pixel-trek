class Map < ApplicationController
	$map1 = JSON.parse(File.read("public/maps/map1.json"))

	def self.sendMapChunksNearPlayer (uuid, currentPlayer)
		player = currentPlayer

		player = eval(REDIS.get("player_#{uuid}"))

		playerMoveMargin = 0
		playerView = 500

		chunksToSend = []

		if (currentPlayer["x"].abs - player["x"].abs).abs >= playerMoveMargin || (currentPlayer["y"].abs - player["y"].abs).abs >= playerMoveMargin
			#Check each chunk, and see which ones are closest to player...
			tileSize = 20
			$map1.each do |chunk|
				if ((chunk["x"] * tileSize) - currentPlayer["x"]).abs < playerView && ((chunk["y"] * tileSize) - currentPlayer["y"]).abs < playerView
					chunksToSend.push(chunk)
				end
			end
		end

		if chunksToSend.length > 0
			#(if there's any chunks close enough...)
			ActionCable.server.broadcast "player_#{uuid}", {action: "send_chunks", chunks: chunksToSend}

			REDIS.set("player_#{uuid}", currentPlayer)
		end
	end
end