defmodule Error.Handling do
  require Logger
  def parse (req) do
    {status, data} = req
    Logger.info(status)
    if (status == :ok) do
      normalizeData data
    else
      %{
        :passed => false,
        :data => Enum.map(
          data.errors,
          fn data -> %{
            :for => elem(data, 0),
            :rule => elem(data, 1)
              |> elem(0),
            :info => elem(data, 1)
              |> elem(1)
              |> Enum.into(%{})
          }
        end)
      }
    end
  end

  def normalizeData (data) do
    %{:passed => true, :data => Map.delete(data,  :__meta__)}
  end

end
