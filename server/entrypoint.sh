#!/bin/bash
# docker entrypoint script.


bin="/app/bin/prod"
# start the elixir application
exec $bin "start"