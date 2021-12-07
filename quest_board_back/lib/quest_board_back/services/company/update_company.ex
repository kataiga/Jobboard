defmodule QuestBoardBack.Service.Company.Update do
  alias Shemat.Company
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    Repo.get!(Company, index)
    |> Ecto.Changeset.change( name: params["name"], description: params["description"], address: params["address"])
    |> Repo.update
  end
end
