defmodule QuestBoardBack.Service.JobOffer.Update do
  alias Shemat.JobOffer
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    {companyId, ""} = Integer.parse(params["companyId"])
    {rank, ""} = Integer.parse(params["rank"])
    {wage, ""} = Integer.parse(params["wage"])
    {workingTime, ""} = Integer.parse(params["workingTime"])
    Repo.get!(JobOffer, index)
    |> Ecto.Changeset.change( title: params["title"], content: params["content"], companyId: companyId, rank: rank, wage: wage, workingTime: workingTime)
    |> Repo.update
  end
end
