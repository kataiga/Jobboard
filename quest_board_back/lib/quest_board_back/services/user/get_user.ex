defmodule QuestBoardBack.Service.User.Get do
  alias QuestBoardBack.Repo
  def byId (id) do
    case Repo.get_by(User, id: id) do
      nil ->
        %{:found => false}
      user ->
        %{:found => true, :user => user}
    end
  end

  def byEmail (email) do
    case Repo.get_by(User, email: email) do
      nil ->
        %{:found => false, :passed => false}
      user ->
        %{:found => true, :user => user, :passed => true}
    end
  end

end
