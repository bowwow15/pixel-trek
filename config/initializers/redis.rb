if ENV["REDISCloud_URL"]
    uri = URI.parse(ENV["REDISCloud_URL"])
    $redis = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)
end