defmodule ShowcaseServerWeb.LuhnView do
  use ShowcaseServerWeb, :view
  alias ShowcaseServerWeb.LuhnView

  def render("index.json", %{luhn: luhn}) do
    %{data: render_many(luhn, LuhnView, "luhn.json")}
  end

  def render("show.json", %{luhn: luhn}) do
    %{data: render_one(luhn, LuhnView, "luhn.json")}
  end

  def render("luhn.json", %{luhn: luhn}) do
    %{id: luhn.id,
      number: luhn.number}
  end
end
