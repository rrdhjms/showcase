defmodule ShowcaseServerWeb.SpaceAgeView do
  use ShowcaseServerWeb, :view
  alias ShowcaseServerWeb.SpaceAgeView

  def render("index.json", %{space_age: space_age}) do
    %{data: render_many(space_age, SpaceAgeView, "space_age.json")}
  end

  def render("show.json", %{space_age: space_age}) do
    %{data: render_one(space_age, SpaceAgeView, "space_age.json")}
  end

  def render("space_age.json", %{space_age: space_age}) do
    %{id: space_age.id,
      age: space_age.age}
  end
end
