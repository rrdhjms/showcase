defmodule ShowcaseServerWeb.BobView do
  use ShowcaseServerWeb, :view
  alias ShowcaseServerWeb.BobView

  def render("index.json", %{bob: bob}) do
    %{data: render_many(bob, BobView, "bob.json")}
  end

  def render("show.json", %{bob: bob}) do
    %{data: render_one(bob, BobView, "bob.json")}
  end

  def render("bob.json", %{bob: bob}) do
    %{id: bob.id,
      sentence: bob.sentence}
  end
end
