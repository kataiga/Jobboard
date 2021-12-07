defmodule QuestBoardBack.Service.Auth.Register do

  alias QuestBoardBack.Repo
  alias QuestBoardBack.Service.ApplyUtils.Create

  def run(params) do
    register = User.changeset(%User{}, params)
    |> Repo.insert

  end

end
