defmodule ShowcaseServerWeb.SpaceAgeController do
  use ShowcaseServerWeb, :controller

  import Services.SpaceAge, only: [age_on: 2]
  import Plug.Conn, only: [put_status: 2]

  action_fallback ShowcaseServerWeb.FallbackController

  def index(conn, %{"age" => age, "planet" => planet} = _params) do
    cond do
      age == nil || planet == nil ->
        index(conn, %{})

      true ->
        try do
          result =
            planet
            |> String.downcase()
            |> String.to_atom()
            |> age_on(String.to_integer(age))

          json(conn, %{planet: planet, age_on: result})
        rescue
          _e in ArgumentError -> conn |> put_status(422) |> html("Age is not an integer.")
        end
    end
  end

  def index(conn, _params), do: conn |> put_status(422) |> html("Invalid Query String.")
end
