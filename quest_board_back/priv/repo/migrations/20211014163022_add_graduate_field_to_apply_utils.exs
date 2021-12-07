defmodule QuestBoardBack.Repo.Migrations.AddGraduateFieldToApplyUtils do
  use Ecto.Migration

  def change do
    alter table("applyUtils") do
      add :graduate, :json
    end
  end
end
