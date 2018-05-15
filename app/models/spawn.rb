class Spawn < ApplicationController
	def self.getSpawnPoint (uuid)
		x = 0;
		y = 0;

		return {
			x: x,
			y: y,
			state: "idle",
			uuid: uuid
		}
	end
end