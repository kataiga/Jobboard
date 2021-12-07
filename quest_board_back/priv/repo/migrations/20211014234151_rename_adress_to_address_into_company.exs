defmodule QuestBoardBack.Repo.Migrations.RenameAdressToAddressIntoCompany do
  use Ecto.Migration

  def change do
    rename table(:company), :adress, to: :address
  end
end
