defmodule QuestBoardBack.Repo.Migrations.AddUserPruposeAndImgLink do
  use Ecto.Migration

  def change do
    alter table("user") do
      add :userType, :string
      add :avatar, :string
    end
  end
end
