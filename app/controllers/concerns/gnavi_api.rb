module GnaviApi
  require 'active_support/core_ext'
  OAUTH_CONFIG = YAML.load_file("#{Rails.root}/config/omniauth.yml")[Rails.env].symbolize_keys!
  KEYID = OAUTH_CONFIG[:gnavi]['key']
  def self.get_store(name, latitude, longitude)
    params = URI.encode_www_form({ keyid: KEYID, name: name , latitude: latitude, longitude: longitude})
    uri = URI.parse("https://api.gnavi.co.jp/RestSearchAPI/20150630/?#{params}")
    begin
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      response = http.start do |h|
        h.open_timeout = 5
        h.read_timeout = 10
        h.get(uri.request_uri)
      end
      case response
        # 2xx系
        when Net::HTTPSuccess
          Hash.from_xml(response.body)
        # 3xx系
        when Net::HTTPRedirection
          logger.warn("Redirection: code=#{response.code} message=#{response.message}")
        else
          logger.error("HTTP ERROR: code=#{response.code} message=#{response.message}")
      end
    rescue IOError => e
      logger.error(e.message)
    rescue TimeoutError => e
      logger.error(e.message)
    rescue JSON::ParserError => e
      logger.error(e.message)
    rescue => e
      logger.error(e.message)
    end

  end
end