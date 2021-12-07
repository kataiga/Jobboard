defmodule QuestBoardBack.Service.Company.Delete do
  alias Shemat.Company
  alias QuestBoardBack.Repo

  def run (params) do
    {index, ""} = Integer.parse(params["id"])

    %Company{id: index}
    |> Repo.delete
  end
end
