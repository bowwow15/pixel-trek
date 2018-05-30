class Spawn < ApplicationController
	def self.getSpawnPoint (uuid)
		x = 0;
		y = 0;

		return {
			"x" => x,
			"y" => y,
			"last_x" => 0,
			"last_y" => 0,
			"state" => "idle",
			"uuid" => uuid
		}
	end
end