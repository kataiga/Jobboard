defmodule QuestBoardBack.Repo.Migrations.AddDefaultValuesToUser do
  use Ecto.Migration

  def change do
    alter table(:user) do
      modify :isAdmin, :boolean, default: false
      modify :userType, :string, default: "worker"
    end
  end
end
