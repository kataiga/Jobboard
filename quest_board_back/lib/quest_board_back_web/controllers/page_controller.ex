defmodule QuestBoardBackWeb.PageController do
  use QuestBoardBackWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
