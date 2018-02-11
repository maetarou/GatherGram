require 'instagram'

Instagram.configure do |config|
  OAUTH_CONFIG = YAML.load_file("#{Rails.root}/config/omniauth.yml")[Rails.env].symbolize_keys!
  config.client_id = OAUTH_CONFIG[:instagram]['key']
  config.client_secret = OAUTH_CONFIG[:instagram]['secret']
  # config.client_id = 'a15464f6567f4273bb25576eb5873d84'
  # config.client_secret = '1d7ae35ac9de46149d5556d5a0f138f5'
end
