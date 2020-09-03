defmodule ShowcaseServerWeb.LuhnController do
  use ShowcaseServerWeb, :controller

  import Plug.Conn, only: [put_status: 2]

  action_fallback ShowcaseServerWeb.FallbackController

  def index(conn, %{"number" => number} = _params) do
    case number do
      nil ->
        res =
          ""
          |> Services.Luhn.valid?()
          |> to_string()

        json(conn, %{result: res})

      _ ->
        res =
          number
          |> Services.Luhn.valid?()
          |> to_string()

        json(conn, %{result: res})
    end
  end

  def index(conn, _params), do: conn |> put_status(422) |> html("Invalid Query String.")
end
