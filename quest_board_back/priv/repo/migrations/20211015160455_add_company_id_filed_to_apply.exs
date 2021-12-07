defmodule QuestBoardBack.Repo.Migrations.AddCompanyIdFiledToApply do
  use Ecto.Migration

  def change do
    alter table("apply") do
      add :companyId, :integer
    end
  end
end
