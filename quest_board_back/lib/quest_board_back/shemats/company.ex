defmodule Shemat.Company do
  use Ecto.Schema
  import Ecto.Changeset
  require Protocol
  @derive {Jason.Encoder, only: [:address, :id, :description, :name]}

  schema "company" do
    field :name, :string
    field :address, :string
    field :description, :string

    timestamps()
  end

  @doc false
  def changeset(%Shemat.Company{} = user, attrs) do
    user
    |> cast(attrs, [:name, :address, :description])
    |> validate_required([:name, :adress, :description])
  end
end
