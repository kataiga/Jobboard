defmodule QuestBoardBackWeb.ApplyControler do
  use QuestBoardBackWeb, :controller

  alias QuestBoardBack.Service.Apply.Create
  alias QuestBoardBack.Service.Apply.Read
  alias QuestBoardBack.Service.Apply.Delete
  alias QuestBoardBack.Service.Apply.Update

  alias Error.Handling

  def create(conn, _params) do
    json(conn, Create.run(_params) |> Handling.parse)
  end

  def read(conn, _params) do
    json(conn, Enum.map(Read.run(_params), fn entrie -> entrie |> Handling.normalizeData end))
  end

  def delete(conn, _params) do
    json(conn, Delete.run(_params) |> Handling.parse)
  end

  def update(conn, _params) do
    json(conn, Update.run(_params) |> Handling.parse)
  end

end
