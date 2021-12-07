defmodule QuestBoardBack.Service.JobOffer.Create do
  alias Shemat.JobOffer
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    JobOffer.changeset(%JobOffer{}, params)
    |> Repo.insert
  end
end
