defmodule ShowcaseServerWeb.AcronymView do
  use ShowcaseServerWeb, :view
  alias ShowcaseServerWeb.AcronymView

  def render("index.json", %{acronym: acronym}) do
    %{data: render_many(acronym, AcronymView, "acronym.json")}
  end

  def render("show.json", %{acronym: acronym}) do
    %{data: render_one(acronym, AcronymView, "acronym.json")}
  end

  def render("acronym.json", %{acronym: acronym}) do
    %{id: acronym.id,
      acronym: acronym.acronym}
  end
end
