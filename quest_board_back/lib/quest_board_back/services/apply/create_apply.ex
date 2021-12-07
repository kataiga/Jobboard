defmodule QuestBoardBack.Service.Apply.Create do
  alias Shemat.Apply
  alias QuestBoardBack.Repo

  def run(params) do
    Apply.changeset(%Apply{}, params)
    |> Repo.insert
  end

end
