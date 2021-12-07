defmodule QuestBoardBack.Service.ApplyUtils.Create do
  alias Shemat.ApplyUtils
  alias QuestBoardBack.Repo

  require Logger

  def run (params) do
    ApplyUtils.changeset(%ApplyUtils{}, params)
    |> Repo.insert
  end
end
