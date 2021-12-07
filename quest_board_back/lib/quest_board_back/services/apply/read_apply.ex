defmodule QuestBoardBack.Service.Apply.Read do
  alias Shemat.Apply
  alias QuestBoardBack.Repo

  def run(params) do
    Repo.all(Apply)
  end

end
