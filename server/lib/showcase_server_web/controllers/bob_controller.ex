defmodule ShowcaseServerWeb.BobController do
  use ShowcaseServerWeb, :controller

  import Services.Bob, only: [hey: 1]
  import Plug.Conn, only: [put_status: 2]

  action_fallback ShowcaseServerWeb.FallbackController

  def index(conn, %{"string" => sentence} = _params) do
    case sentence do
      nil ->
        result = hey("")
        json(conn, %{result: result})

      _ ->
        result = hey(sentence)
        json(conn, %{result: result})
    end
  end

  def index(conn, _params), do: conn |> put_status(422) |> html("Invalid Query String.")
end
