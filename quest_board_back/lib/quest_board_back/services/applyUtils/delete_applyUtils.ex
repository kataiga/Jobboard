defmodule QuestBoardBack.Service.ApplyUtils.Delete do
  alias Shemat.ApplyUtils
  alias QuestBoardBack.Repo

  def run (params) do
    {index, ""} = Integer.parse(params["id"])

    %ApplyUtils{id: index}
    |> Repo.delete
  end
end
