uri = URI.parse("redis://redistogo:3128a237dbc940744719af607d9d312b@cod.redistogo.com:9348/")
REDIS = Redis.new(:url => uri)