defmodule QuestBoardBack.Service.ApplyUtils.Read do
  alias Shemat.ApplyUtils
  alias QuestBoardBack.Repo

  def run (params) do
    Repo.all(ApplyUtils)
  end
end
