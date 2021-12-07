defmodule QuestBoardBack.Service.Apply.Update do
  alias Shemat.Apply
  alias QuestBoardBack.Repo

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    {companyId, ""} = Integer.parse(params["companyId"])
    Repo.get!(Apply, index)
    |> Ecto.Changeset.change( userMail: params["userMail"], skills: params["skills"], graduate: params["graduate"], message: params["message"], companyId: companyId)
    |> Repo.update
  end

end
