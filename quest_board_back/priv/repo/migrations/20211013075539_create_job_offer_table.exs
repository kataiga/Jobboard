defmodule QuestBoardBack.Repo.Migrations.CreateJobOfferTable do
  use Ecto.Migration

  def change do
    create table(:jobOffer) do
      add :title, :string
      add :content, :string
      add :companyId, :integer
      add :rank, :integer
      timestamps()
    end
  end
end
