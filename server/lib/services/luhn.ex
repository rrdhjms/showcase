defmodule Services.Luhn do
  @doc """
  Checks if the given number is valid via the luhn formula
  """
  @spec valid?(String.t()) :: boolean
  def valid?(number) do
    with {:ok, numbers} <- sanitize(number) do
      result = check_luhn(numbers)
      rem(result, 2) == 0
    else
      :error -> false
    end
  end

  def check_luhn(number) do
    number
    |> Enum.zip(Stream.cycle([0, 1]))
    |> Enum.map(fn
      {n, 0} -> n
      {n, 1} when n >= 5 -> n * 2 - 9
      {n, 1} -> n * 2
    end)
    |> Enum.sum()
  end

  defp sanitize(number) do
    trimmed = String.replace(number, " ", "")

    cond do
      String.match?(trimmed, ~r/[^\d]/) ->
        :error

      String.length(trimmed) <= 1 ->
        :error

      true ->
        {
          :ok,
          trimmed
          |> String.graphemes()
          |> Enum.map(&String.to_integer(&1, 10))
        }
    end
  end
end
