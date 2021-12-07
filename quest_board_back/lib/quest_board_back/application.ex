defmodule QuestBoardBack.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      QuestBoardBack.Repo,
      # Start the Telemetry supervisor
      QuestBoardBackWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: QuestBoardBack.PubSub},
      # Start the Endpoint (http/https)
      QuestBoardBackWeb.Endpoint
      # Start a worker by calling: QuestBoardBack.Worker.start_link(arg)
      # {QuestBoardBack.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: QuestBoardBack.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    QuestBoardBackWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
