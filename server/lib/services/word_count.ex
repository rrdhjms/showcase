defmodule Services.WordCount do
  import String, only: [downcase: 1, split: 2]
  import Regex, only: [replace: 3]

  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t()) :: map
  def count(sentence) do
    tokens =
      sentence
      |> normalise
      |> word_list

    Enum.reduce(tokens, Map.new(), &count_words/2)
  end

  defp normalise(sentence) do
    replace(~r{[^\w\s]}, downcase(sentence), "")
  end

  defp word_list(sentence), do: split(sentence, [" ", "_"])

  defp count_words(word, map) do
    Map.update(map, word, 1, &(&1 + 1))
  end
end
