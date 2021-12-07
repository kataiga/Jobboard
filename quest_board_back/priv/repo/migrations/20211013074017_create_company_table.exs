defmodule QuestBoardBack.Repo.Migrations.CreateCompanyTable do
  use Ecto.Migration

  def change do
    create table(:company) do
      add :name, :string
      add :adress, :string
      add :description, :string
      timestamps()
    end
  end
end
