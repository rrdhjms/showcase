defmodule Services.Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    string
    |> split_string()
    |> Enum.reduce("", &add_to_acronym/2)
    |> String.reverse()
  end

  defp split_string(string) do
    String.split(string, ~r/[\s-_]|(?=[A-Z][a-z]+)/, trim: true)
  end

  defp add_to_acronym(word, acc) do
    word
    |> String.first()
    |> String.capitalize(:default)
    |> Kernel.<>(acc)
  end
end
