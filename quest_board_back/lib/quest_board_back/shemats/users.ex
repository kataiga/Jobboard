defmodule User do
  use Ecto.Schema
  import Ecto.Changeset
  require Protocol
  @derive {Jason.Encoder, only: [:id, :first_name, :last_name, :birth, :email, :avatar, :isAdmin]}

  schema "user" do
    field :first_name, :string
    field :last_name, :string
    field :birth, :date
    field :email, :string
    field :password, :string
    field :isAdmin, :boolean
    field :userType, :string
    field :avatar, :string

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :birth, :email, :password, :avatar])
    |> unique_constraint(:email)
    |> validate_required([:first_name, :last_name, :birth, :email, :password, :avatar])
    |> validate_length(:first_name, min: 3)
    |> validate_length(:last_name, min: 3)
    |> validate_length(:password, min: 8)
    |> validate_format(:email, ~r/@/)
    |> put_hashed_password
  end

  defp put_hashed_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}}
        ->
          put_change(changeset, :password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
          changeset
    end
  end

end
