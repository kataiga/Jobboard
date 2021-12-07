defmodule QuestBoardBack.Service.Company.Read do
  alias Shemat.Company
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    Repo.all(Company)
  end
end
