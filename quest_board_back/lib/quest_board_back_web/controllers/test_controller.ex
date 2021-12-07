defmodule QuestBoardBackWeb.TestController do
  require Logger
  use QuestBoardBackWeb, :controller
  def index(conn, _params) do
    json(conn, "la valeur de retour, si cela fonctionne je suis vraiment un grand espris")
  end

  def caca(conn, _params) do
    json(conn, %{"test" => "nous vivons dans une societee"})
  end
end
