defmodule QuestBoardBack.Repo.Migrations.AddApplyUtilsTable do
  use Ecto.Migration

  def change do
    create table(:applyUtils) do
      add :userId, :integer
      add :skills, :json
      timestamps()
    end
    create unique_index(:applyUtils, [:userId])
  end
end
