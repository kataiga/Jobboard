defmodule QuestBoardBack.Service.Auth.Login do
  require Logger
  alias QuestBoardBack.Service.User.Get
  alias QuestBoardBack.Guardian

  def run (params) do

    Guardian.authenticate(params["email"], params["password"])
    # params["email"]
    # |> Get.byEmail

  end
end
