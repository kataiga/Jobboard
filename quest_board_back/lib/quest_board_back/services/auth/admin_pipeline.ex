defmodule QuestBoardBack.Plug.StaffOnly do
  import Plug.Conn
  alias QuestBoardBack.Guardian
  alias QuestBoardBack.Service.User.Get
  alias QuestBoardBack.Auth.ErrorHandler

  require Logger

  def init(options), do: options
  #plug
  def call(conn, _opts) do
    {_, token} = Enum.into(conn.req_headers, %{})["authorization"]
    |> String.replace("bearer ", "")
    |> Guardian.decode_and_verify
    user = token["sub"]
    |> Get.byId
    if (user[:user].isAdmin) do
      conn
    else
      ErrorHandler.auth_error(conn, {"get out! We don't like people who try to access things that aren't accessible", ""}, _opts)
    end
  end
end
