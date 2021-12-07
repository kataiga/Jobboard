defmodule QuestBoardBack.Service.Company.Create do
  alias Shemat.Company
  alias QuestBoardBack.Repo

  def run (params) do
    Company.changeset(%Company{}, params)
    |> Repo.insert
  end
end
