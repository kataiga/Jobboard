defmodule QuestBoardBack.Repo.Migrations.AddIsAdmin_FieldToUser do
  use Ecto.Migration

  def change do
    alter table("user") do
      add :isAdmin, :boolean
    end
  end
end
