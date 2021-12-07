defmodule Shemat.ApplyUtils do
  use Ecto.Schema
  import Ecto.Changeset
  require Protocol
  @derive {Jason.Encoder, only: [:id, :userId, :skills, :graduate]}

  schema "applyUtils" do
    field :userId, :integer
    field :skills, Ecto.JSON
    field :graduate, Ecto.JSON
    timestamps()
  end

  @doc false
  def changeset(%Shemat.ApplyUtils{} = user, attrs) do
    user
    |> cast(attrs, [:userId, :graduate, :skills])
    |> validate_required([:userId, :graduate, :skills])
  end
end
