if ENV["REDISCloud_URL"]
    $redis = Redis.new(:url => ENV["REDISCloud_URL"])
end