defmodule Services.Bob do
  def hey(input) do
    input = String.trim(input)

    cond do
      silence?(input) -> "Fine. Be that way!"
      question?(input) and shouting?(input) -> "Calm down, I know what I'm doing!"
      question?(input) -> "Sure."
      shouting?(input) -> "Whoa, chill out!"
      true -> "Whatever."
    end
  end

  defp silence?(input) do
    input == ""
  end

  defp question?(input) do
    String.ends_with?(input, "?")
  end

  defp shouting?(input) do
    input == String.upcase(input) and input != String.downcase(input)
  end
end
