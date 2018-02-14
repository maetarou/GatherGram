require "instagram"

Instagram.configure do |config|
  OAUTH_CONFIG = YAML.load_file("#{Rails.root}/config/omniauth.yml")[Rails.env].symbolize_keys!
  config.client_id = OAUTH_CONFIG[:instagram]['key']
  config.client_secret = OAUTH_CONFIG[:instagram]['secret']
end
