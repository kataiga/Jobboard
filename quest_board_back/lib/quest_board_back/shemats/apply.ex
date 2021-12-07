defmodule Shemat.Apply do
  use Ecto.Schema
  import Ecto.Changeset
  require Protocol
  @derive {Jason.Encoder, only: [:id, :userMail, :companyId, :skills, :graduate, :message]}

  schema "apply" do
    field :userMail, :string
    field :skills, Ecto.JSON
    field :graduate, Ecto.JSON
    field :message, :string
    field :companyId, :integer

    timestamps()
  end

  @doc false
  def changeset(%Shemat.Apply{} = apply, attrs) do
    apply
    |> cast(attrs, [:userMail, :skills, :graduate, :message, :companyId])
    |> validate_required([:userMail, :skills, :graduate, :message, :companyId])
    |> validate_format(:userMail, ~r/@/)
  end
end
