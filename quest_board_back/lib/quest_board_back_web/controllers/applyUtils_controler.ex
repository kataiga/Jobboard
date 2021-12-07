defmodule QuestBoardBackWeb.ApplyUtilsControler do
  use QuestBoardBackWeb, :controller

  alias QuestBoardBack.Service.ApplyUtils.Create
  alias QuestBoardBack.Service.ApplyUtils.Read
  alias QuestBoardBack.Service.ApplyUtils.Delete
  alias QuestBoardBack.Service.ApplyUtils.Update
  alias QuestBoardBack.Service.ApplyUtils.Get

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

  def get(conn, _params) do
    json(conn, Get.run(_params))
  end

end
