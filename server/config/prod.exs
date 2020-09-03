# File: showcase_server/config/prod.exs
use Mix.Config
# Used to generate urls
config :showcase_server, ShowcaseServerWeb.Endpoint, url: [host: "localhost", port: 4000]
# Do not print debug messages in production
config :logger, level: :info
# ## Using releases (Elixir v1.9+)
#
# If you are doing OTP releases, you need to instruct Phoenix
# to start each relevant endpoint:
#
config :showcase_server, ShowcaseServerWeb.Endpoint, server: true
