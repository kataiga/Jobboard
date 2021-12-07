defmodule QuestBoardBack.Service.JobOffer.Get do
  alias Shemat.JobOffer
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    case Repo.get_by(JobOffer, id: index) do
      nil ->
        %{:found => false}
      jobOffer ->
        %{:found => true, :jobOffer => jobOffer}
    end
  end
end
