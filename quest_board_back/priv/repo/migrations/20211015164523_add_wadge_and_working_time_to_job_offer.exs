defmodule QuestBoardBack.Repo.Migrations.AddWadgeAndWorkingTimeToJobOffer do
  use Ecto.Migration

  def change do
    alter table("jobOffer") do
      add :wage, :integer
      add :workingTime, :integer
    end
  end
end
