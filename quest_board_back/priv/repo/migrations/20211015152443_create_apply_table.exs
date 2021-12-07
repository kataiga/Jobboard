defmodule QuestBoardBack.Repo.Migrations.CreateApplyTable do
  use Ecto.Migration

  def change do
    create table(:apply) do
      add :userMail, :string
      add :skills, :json
      add :graduate, :json
      add :message, :text
      timestamps()
    end
  end
end
