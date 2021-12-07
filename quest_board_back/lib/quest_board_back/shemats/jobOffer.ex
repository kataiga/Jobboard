defmodule Shemat.JobOffer do
  use Ecto.Schema
  import Ecto.Changeset
  @derive {Jason.Encoder, only: [:id, :title, :content, :companyId, :rank, :wage, :workingTime]}
  schema "jobOffer" do
    field :title, :string
    field :content, :string
    field :companyId, :integer
    field :rank, :integer
    field :wage, :integer
    field :workingTime, :integer
    timestamps()
  end

  def changeset(%Shemat.JobOffer{} = jobOffer, attrs) do
    jobOffer
    |> cast(attrs, [:title, :content, :companyId, :rank, :wage, :workingTime])
    |> validate_required([:title, :content, :companyId, :rank, :wage, :workingTime])
  end

end
