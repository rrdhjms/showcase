# Showcase

A web application to showcase all the exercises I have completed on [exercism.io](exercism.io). Currently this project only has an API with a handful of the exercises implemented.

### Running the App

There are 4 options for running the API in the `server/` directory:

1. Run locally with Mix

   ```bash
   $ mix phx.server
   ```

2. Run containerised Development version

   ```bash
   $ docker build --tag showcase_server -f Dockerfile.development .
   $ docker run showcase_server
   ```

3. Run containerised Production version (requires installation of Elixir, Mix, and Phoenix to generate the secret)

   ```bash
   $ mix phx.gen.secret
   <generated secret>
   $ docker build --tag showcase_server -f Dockerfile.production .
   $ docker run -e SECRET_KEY_BASE=<generated secret> -p 4000:4000 --name showcase_server showcase_server
   ```

   #### Options

   The following are extra environment variables, _these are not important for the containerised release version_.

   - `-e HOST_NAME` - Default, localhost.
   - `-e PORT` - Default, 4000. 

4. Run production version locally

   Ensure Elixir, Mix, and Phoenix are installed locally.
   Set environment variables:

   ```bash
   $ mix phx.gen.secret
   <generated secret>
   $ export SECRET_KEY_BASE=<generated secret>
   ```

   Load dependencies and compile code:

   ```bash
   $ mix deps.get --only prod
   $ MIX_ENV=prod mix compile
   ```

   Now run `mix release`:

   ```bash
   $ MIX_ENV=prod mix release
   ```

   Finally, after the release finishes running there should be a start command displayed in the console similar to:

   ```bash
   $ _build/prod/rel/prod/bin/prod start
   ```

   