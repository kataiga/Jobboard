defmodule QuestBoardBack.Service.JobOffer.Read do
  alias Shemat.JobOffer
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    Repo.all(JobOffer)
  end
end
