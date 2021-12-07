defmodule QuestBoardBack.Service.Apply.Delete do
  alias Shemat.Apply
  alias QuestBoardBack.Repo

  def run(params) do
    {index, ""} = Integer.parse(params["id"])

    %Apply{id: index}
    |> Repo.delete
  end

end
