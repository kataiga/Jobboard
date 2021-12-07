defmodule QuestBoardBack.Repo.Migrations.User do
  use Ecto.Migration

  def change do
    create table(:user) do
      add :first_name, :string
      add :last_name, :string
      add :birth, :date
      add :email, :string
      add :password, :string
      timestamps()
    end
  end
end
