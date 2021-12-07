defmodule QuestBoardBackWeb.AuthController do
  use QuestBoardBackWeb, :controller

  alias QuestBoardBack.Service.Auth.Register
  alias QuestBoardBack.Service.Auth.Login

  alias Error.Handling

  def register(conn, _params) do
    json(conn, Register.run(_params) |> Handling.parse)
  end

  def login(conn, _params) do
    json(conn, Login.run(_params))
  end
end
