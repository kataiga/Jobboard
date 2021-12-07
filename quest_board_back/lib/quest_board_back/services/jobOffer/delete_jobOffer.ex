defmodule QuestBoardBack.Service.JobOffer.Delete do
  alias Shemat.JobOffer
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    {index, ""} = Integer.parse(params["id"])

    %JobOffer{id: index}
    |> Repo.delete
  end
end
