import Config

secret_key_base = System.get_env("SECRET_KEY_BASE")
app_port = System.get_env("PORT") || 4000
app_hostname = System.get_env("APP_HOSTNAME") || "localhost"

config :showcase_server, ShowcaseServerWeb.Endpoint,
  http: [:inet6, port: app_port],
  secret_key_base: secret_key_base

config :showcase_server,
  app_port: app_port

config :showcase_server,
  app_hostname: app_hostname
