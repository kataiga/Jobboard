defmodule QuestBoardBackWeb.UserController do
  use QuestBoardBackWeb, :controller

  alias QuestBoardBack.Service.User.Get

  alias Error.Handling

  def get(conn, _params) do
    json(conn, Get.byEmail(_params["email"]))
  end
end
