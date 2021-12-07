defmodule QuestBoardBack.Service.Company.Get do
  alias Shemat.Company
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    case Repo.get_by(Company, id: index) do
      nil ->
        %{:found => false}
      company ->
        %{:found => true, :company => company}
    end
  end
end
