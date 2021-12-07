defmodule QuestBoardBack.Service.ApplyUtils.Get do
  alias Shemat.ApplyUtils
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    {index, ""} = Integer.parse(params["id"])
    case Repo.get_by(ApplyUtils, userId: index) do
      nil ->
        %{:found => false, :passed => false}
      applyUtils ->
        %{:found => true, :passed => true, :applyUtils => applyUtils}
    end
  end
end
