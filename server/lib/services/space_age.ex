defmodule Services.SpaceAge do
  @type planet ::
          :mercury
          | :venus
          | :earth
          | :mars
          | :jupiter
          | :saturn
          | :uranus
          | :neptune

  @mercury 0.2408467
  @venus 0.61519726
  @mars 1.8808158
  @jupiter 11.862615
  @saturn 29.447498
  @uranus 84.016846
  @neptune 164.79132
  @doc """
  Return the number of years a person that has lived for 'seconds' seconds is
  aged on 'planet'.
  """
  @spec age_on(planet, pos_integer) :: float
  def age_on(planet, seconds) do
    earth_age = age_on_earth(seconds)

    case planet do
      :mercury ->
        Float.round(earth_age / @mercury, 3)

      :venus ->
        Float.round(earth_age / @venus, 3)

      :earth ->
        earth_age

      :mars ->
        Float.round(earth_age / @mars, 3)

      :jupiter ->
        Float.round(earth_age / @jupiter, 3)

      :saturn ->
        Float.round(earth_age / @saturn, 3)

      :uranus ->
        Float.round(earth_age / @uranus, 3)

      :neptune ->
        Float.round(earth_age / @neptune, 3)

      _ ->
        0
    end
  end

  defp age_on_earth(seconds) do
    Float.round(seconds / 31_557_600, 3)
  end
end

# great solution:
# https://exercism.io/tracks/elixir/exercises/space-age/solutions/a28d3f38998a4330b6273ff86321d82c
