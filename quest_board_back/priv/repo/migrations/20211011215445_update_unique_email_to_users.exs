defmodule QuestBoardBack.Repo.Migrations.UpdateUniqueEmailToUsers do
  use Ecto.Migration

  def change do
    create unique_index(:user, [:email])
  end
end
