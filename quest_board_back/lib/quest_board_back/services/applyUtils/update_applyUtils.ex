defmodule QuestBoardBack.Service.ApplyUtils.Update do
  alias Shemat.ApplyUtils
  alias QuestBoardBack.Repo

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    {userId, ""} = Integer.parse(params["userId"])
    Repo.get!(ApplyUtils, index)
    |> Ecto.Changeset.change( skills: params["skills"], graduate: params["graduate"], userId: userId)
    |> Repo.update
  end
end
