defmodule QuestBoardBack.Repo.Migrations.ModifyTextTypeInAvatar do
  use Ecto.Migration

  def change do
    alter table(:user) do
      modify :avatar, :text
    end
  end
end
