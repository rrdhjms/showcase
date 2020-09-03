defmodule ShowcaseServerWeb.AcronymController do
  use ShowcaseServerWeb, :controller

  import Services.Acronym, only: [abbreviate: 1]
  import Plug.Conn, only: [put_status: 2]

  action_fallback ShowcaseServerWeb.FallbackController

  def index(conn, %{"string" => words} = _params) do
    case words do
      nil ->
        json(conn, %{result: ""})

      _ ->
        result = abbreviate(words)
        json(conn, %{result: result})
    end
  end

  def index(conn, _params), do: conn |> put_status(422) |> html("Invalid Query String")
end

# mix phx.gen.json Acronyms Acronym acronym --no-context --no-schema acronym:string
