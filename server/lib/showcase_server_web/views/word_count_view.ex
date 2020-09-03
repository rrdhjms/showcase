defmodule ShowcaseServerWeb.WordCountView do
  use ShowcaseServerWeb, :view
  alias ShowcaseServerWeb.WordCountView

  def render("index.json", %{word_count: word_count}) do
    %{data: render_many(word_count, WordCountView, "word_count.json")}
  end

  def render("show.json", %{word_count: word_count}) do
    %{data: render_one(word_count, WordCountView, "word_count.json")}
  end

  def render("word_count.json", %{word_count: word_count}) do
    %{id: word_count.id,
      sentence: word_count.sentence}
  end
end
