require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module OicGather
  class Application < Rails::Application
    config.load_defaults 5.1

    config.generators do |g|
      g.assets         false
      g.helper         false
      g.test_framework false
    end

    config.assets.enabled = false

    config.middleware.insert_before ActionDispatch::Static, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :delete]
      end
    end
  end
end

